import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BelgoRent';
  displayLogin: string | null = "Se Connecter";

  isConnected() {
    return sessionStorage.getItem("connectedUser")
  }

  logout() {
    sessionStorage.clear()
    // sessionStorage.removeItem("connectedUser");
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("connectedId");
    // sessionStorage.removeItem("connectedName");
    // sessionStorage.removeItem("connectedFirstName");
    // sessionStorage.removeItem("connectedBday");
    // sessionStorage.removeItem("connectedRoles");
  }

  loginProfil() {

  }

  isAdmin() {
    if ( this.isConnected()) {
      let roles = sessionStorage.getItem("connectedRoles");
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
      let roles = sessionStorage.getItem("connectedRoles");
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
