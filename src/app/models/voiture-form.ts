import {Modele} from "./modele";
import {ModeleForm} from "./modele-form";

export interface VoitureForm {
  id_voiture: number;
  prix: number;
  couleur: string;
  carburant: string;
  kilometre: number;
  manuelle: boolean;
  typev: string;
  etat: string;

  // listLocations;

  modele: ModeleForm;

  //listOptions;
}
