import {Modele} from "./modele";

export interface Marque {
  id_marque: number;
  nom: string;
  listModeleRef: Modele[];
  //   {
  //   id: number,
  //   nom: string
  // }[]
}
