export interface Client {
  id_client: number;
  nom: string;
  prenom: string;
  date_naiss: string;

  listLocations: {
    id: number;
    lieu_dep: string;
    lieu_arr: string;
    date_debut: string;
    date_fin: string;
  }[]
}
