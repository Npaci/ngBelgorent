import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ClientService} from "./services/client.service";
import {Router} from "@angular/router";
import {SessionService} from "./services/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BelgoRent';
  displayLogin: string | null = "Se Connecter";

  constructor(private sServ: SessionService) {}

  isConnected(): boolean {
    return this.sServ.isLogged()
  }

  logout() {
    this.sServ.clear()
  }

  loginProfil() {

  }

  isAdmin() {
    if ( this.isConnected()) {
      let roles = this.sServ.getConnectedRoles();
      let splitted = roles == null ? null : roles.split(",", 2);

      if (splitted == null)
        return false
      else if (splitted[0] === "ADMIN" || splitted[1] === "ADMIN")
        return true;

      return false;
    }else
      return false;
  }

  isUser() {
    if ( this.isConnected()) {
      let roles = this.sServ.getConnectedRoles();
      let splitted = roles == null ? null : roles.split(",", 2);

      if (splitted == null)
        return false
      else if (splitted[0] === "ADMIN")
        return false;

      return true;
    }else
      return false;
  }
}
