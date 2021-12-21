import {Modele} from "./modele";
import {ModeleForm} from "./modele-form";

export interface VoitureForm {
  id_voiture: number;
  VIN: string;
  modele_id: number;
  prix: number;
  couleur: string;
  carburant: string;
  kilometre: number;
  manuelle: boolean;
  type: string;
  etat: string;
  image: string;

  // listLocations: {}[];

  modele: ModeleForm;

  // listOptions: {}[];
}
