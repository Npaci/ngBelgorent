export interface Marque {
  id_marque: number;
  nom: string;
  listModeleRef: {
    id: number,
    nom: string
  }[]
}
