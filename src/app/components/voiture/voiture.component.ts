import { Component, OnInit } from '@angular/core';
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  listVoiture: Voiture[] = [];

  constructor(private vServ: VoitureService, private router: Router) {}

  ngOnInit(): void {
    this.vServ.getAll().subscribe(
      {
        next: voitures => this.listVoiture = voitures,
        error: err => {this.router.navigate(["page500"])}
      }
    )
  }

}
