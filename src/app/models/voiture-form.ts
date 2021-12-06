import {Modele} from "./modele";
import {ModeleForm} from "./modele-form";

export interface VoitureForm {
  id_voiture: number;
  modele_id: number;
  prix: number;
  couleur: string;
  carburant: string;
  kilometre: number;
  manuelle: boolean;
  type: string;
  etat: boolean;

  // listLocations: {}[];

  modele: ModeleForm;

  // listOptions: {}[];
}
