import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  listClients: Client[] = [];
  constructor(private cServ: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.cServ.getAll().subscribe(
      {
        next: clients => this.listClients = clients,
        error: err => {this.router.navigate(["page500"])}
      }
    )
  }

  public calculAge(date_naiss: string): number
  {
    if(date_naiss){
      let timeDiff = Math.abs(Date.now() - Date.parse(date_naiss));
      //Math.floor pour eviter d'arrondir a l'unité sup
      return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }

    return -1;
  }

}
