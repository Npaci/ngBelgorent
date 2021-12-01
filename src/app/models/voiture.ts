import {Modele} from "./modele";
import {ModeleForm} from "./modele-form";

export interface Voiture {
  id_voiture: number;
  prix: number;
  couleur: string;
  carburant: string;
  kilometre: number;
  manuelle: boolean;
  typev: string;
  etat: string;

  modeleIntern: ModeleForm,
  //   {
  //   id: number,
  //   nom: string,
  //   nomMarque: string
  // }

  listOptions: {
    id: number,
    nom: string,
    prix: number
  }[]

  listLocations: {
    id: number;
    lieu_dep: string;
    lieu_arr: string;
    date_debut: string;
    date_fin: string;
  }[];
}
