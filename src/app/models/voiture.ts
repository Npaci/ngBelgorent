import {Modele} from "./modele";
import {ModeleForm} from "./modele-form";

export interface Voiture {
  id_voiture: number;
  VIN: string;
  prix: number;
  couleur: string;
  carburant: string;
  kilometre: number;
  manuelle: boolean;
  typev: string;
  etat: string;
  image: string;

  modeleIntern: {
    id_modele: number,
    nom: string,
    nomMarque: string
  }

  listOptions: {
    id: number,
    nom: string,
    prix: number
  }[]

  locationInterns: {
    id: number;
    lieu_dep: string;
    lieu_arr: string;
    date_debut: string;
    date_fin: string;
    etat: string;
  }[];
}
