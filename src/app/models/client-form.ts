export interface ClientForm {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  date_naiss: string;

  listLocations: {
    id: number;
    lieu_dep: string;
    lieu_arr: string;
    date_debut: string;
    date_fin: string;
    etat: string;
  }[]
}
