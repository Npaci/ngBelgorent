import { Component, OnInit } from '@angular/core';
import {RentalService} from "../../services/rental.service";
import {Rental} from "../../models/rental";
import {Router} from "@angular/router";
import {VoitureService} from "../../services/voiture.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  status: string = "";
  selectedRent: number = -1;
  listLocations: Rental[] = [];
  showModal: boolean;
  endMessage: string;
  modalTitle: string;

  constructor(private rServ: RentalService, private vServ: VoitureService, private router: Router) {
    this.showModal = false;
    this.endMessage = "";
    this.modalTitle = ""
  }

  ngOnInit(): void {
    this.rServ.getAll().subscribe(
      {
        next: locations => this.listLocations = locations,
        error: err => {
          if (err.status === 403)
            this.router.navigate(["accueil"])
          else if (err.status === 404)
            this.router.navigate(["page404"]);
          else
            this.router.navigate(["page500"])
        }
      }
    )
  }

  saveStatus() {
    if (this.status != "" && this.listLocations[this.selectedRent].voiture.etat != this.status) {
      this.listLocations[this.selectedRent].voiture.etat = this.status
      const v = this.listLocations[this.selectedRent].voiture;
      this.vServ.updateStatus({
        id_voiture: v.id_voiture,
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
        manuelle: true,
        carburant: v.carburant,
        kilometre: 0
      }).subscribe({
        next: rep => {
          console.log(JSON.stringify(rep));
          this.showModal = true;
          this.modalTitle = "Mise à jour de l'état";
          this.endMessage = "L'état du véhicule à bien été modifié";
        },
        error: err => {
          console.log(JSON.stringify(err));
          if (err.status === 400)
            this.endMessage = err.message;
          else
            this.endMessage = err.error.message;

          this.modalTitle = "Erreur";
          this.showModal = true;
        }
      })
    }
  }

  expired(returnDate: string, status: string) : boolean {
    return ((new Date().valueOf() > new Date(returnDate).valueOf()) && status === "LOUE");
  }

  changeStatus(index: number) {
    this.selectedRent = index;
  }

  resetForm() {
    this.showModal = false;
    this.endMessage = "";
    this.modalTitle = ""
  }
}
