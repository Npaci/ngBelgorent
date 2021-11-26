import {Marque} from "./marque";

export interface Modele {
  id_modele: number;
  nom: string;

  marqueIntern: {
    id: number,
    nom: string
  };
}
