import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  notAdult: boolean;
  rechDisabled: boolean = false;
  listClients: Client[] = [];
  userForm: FormGroup;

  constructor(builder: FormBuilder, private cServ: ClientService, private router: Router) {
    this.notAdult = false;
    this.userForm = builder.group({
      'nom': new FormControl(null, [Validators.required]),
      'prenom': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'date_naiss': new FormControl(null, [Validators.required]),
      //'image': new FormControl()
    });
  }

  ngOnInit(): void {

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

  getAllUsers() {
    this.rechDisabled = true;
    this.cServ.getAll().subscribe(
      {
        next: clients => this.listClients = clients,
        error: err => {this.router.navigate(["page500"])},
        complete: () => this.rechDisabled = false
      }
    )
  }

  onSubmit() {
    if (this.userForm.valid){
      const v = this.userForm.value;
      this.cServ.postUser({
        id: 0,
        nom: v.nom,
        prenom: v.prenom,
        username: v.username,
        password: v.password,
        date_naiss: v.date_naiss,
        listLocations: []
      }).subscribe({
        next: console.log,
        error: console.error
      })
    }
  }

  onChangeDate() {
    if (this.calculAge(this.userForm.value.date_naiss) < 18)
      this.notAdult = true;
    else
      this.notAdult = false;
  }
}
