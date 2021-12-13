import {Voiture} from "./voiture";
import {VoitureForm} from "./voiture-form";
import {Client} from "./client";
import {ClientForm} from "./client-form";

export interface RentalForm {
  id_location: number;
  lieu_dep: string;
  lieu_arr: string;
  date_debut: string;
  date_fin: string;

  client: ClientForm;
  //   {
  //   id_client: number;
  //   nom: string;
  //   prenom: string;
  //   date_naiss: string;
  // };

  voiture: VoitureForm;

//   voiture: {
//     id_voiture: number;
//     prix: number;
//     couleur: string;
//     carburant: string;
//     kilometre: string;
//     manuelle: string;
//     typev: string;
//     etat: string;
//   };
}
