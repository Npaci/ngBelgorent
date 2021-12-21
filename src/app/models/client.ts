export interface Client {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  date_naiss: string;
  roles: string[];

  listLocations: {
    id: number;
    lieu_dep: string;
    lieu_arr: string;
    date_debut: string;
    date_fin: string;
    etat: string;
  }[]

  // image: File;
}
