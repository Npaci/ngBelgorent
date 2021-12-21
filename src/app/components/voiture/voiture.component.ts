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
  selectedCar: number = -1;
  status: string = "";
  showModal: boolean;
  endMessage: string;
  modalTitle: string;

  constructor(private vServ: VoitureService, private router: Router) {
    this.showModal = false;
    this.endMessage = "";
    this.modalTitle = ""
  }

  ngOnInit(): void {
    this.vServ.getAll().subscribe(
      {
        next: voitures => {
          // console.log(">>>>>>>>>>>>>>"+JSON.stringify(voitures[0]))
          this.listVoiture = voitures
        },
        error: err => {this.router.navigate(["page500"])}
      }
    );
  }



  selectedIndex(index: number) {
    this.selectedCar = index;
  }

  saveStatus() {
    if (this.status != "" && this.listVoiture[this.selectedCar].etat != this.status) {
      this.listVoiture[this.selectedCar].etat = this.status;
      const v = this.listVoiture[this.selectedCar];
      this.vServ.updateStatus({
        id_voiture: v.id_voiture,
        VIN: this.vServ.generateVIN(),
        modele_id: 0,
        modele: {
          id_modele: 0,
          nom: ""
        },
        etat: v.etat,
        type: v.typev,
        image: v.image,
        prix: v.prix,
        couleur: v.couleur,
        manuelle: v.manuelle,
        carburant: v.carburant,
        kilometre: v.kilometre
      }).subscribe({
        next: rep => {
          console.log(JSON.stringify(rep));
          this.showModal = true;
          this.modalTitle = "Mise à jour de l'état";
          this.endMessage = "L'état du véhicule à bien été modifié";
        },
        error: err => {
          console.log(JSON.stringify(err));
          this.showModal = true;
          this.modalTitle = "Erreur";
          this.endMessage = err.error.message;
        }
      })
    }
  }

  resetForm() {
    this.showModal = false;
    this.endMessage = "";
    this.modalTitle = ""
  }

  expired(index: number) : boolean {
    const nbEl = this.listVoiture[index].locationInterns.length;
    console.log(JSON.stringify(this.listVoiture[index].locationInterns))
    if (nbEl > 0)
      if(this.inThePast(this.listVoiture[index].locationInterns[nbEl-1].lieu_arr))
        return true;

    return false;
  }

  inThePast(returnDate: string) : boolean {
    return (new Date().valueOf() > new Date(returnDate).valueOf());
  }

  deleteCar() {
    console.log("iiiiiiiiiiiiiiiidddddddddddddddddddddd "+ this.selectedCar)
    if (this.selectedCar != -1) {

      this.vServ.delete(this.listVoiture[this.selectedCar].id_voiture).subscribe({
        next: rep => {
          console.log("APRES SUPPRESSION: "+JSON.stringify(rep));
          this.showModal = true;
          this.modalTitle = "Suppression";
          this.endMessage = "Le véhicule à bien été supprimé";
          //this.router.navigate(["voiture"]);

          const v = this.listVoiture[this.selectedCar];
          this.listVoiture.forEach( (item, index) => {
            if(item === v)
              this.listVoiture.splice(index,1);
          });
        },
        error: err => {
          console.log(JSON.stringify(err));
          this.showModal = true;
          this.modalTitle = "Erreur de suppression";
          this.endMessage = err.error.message;
        }
      })
    }
  }
}
