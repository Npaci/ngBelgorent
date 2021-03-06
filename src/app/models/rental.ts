export interface Rental {
  id_location: number;
  lieu_dep: string;
  lieu_arr: string;
  date_debut: string;
  date_fin: string;
  etat: string;

  client: {
    id_client: number;
    username: string;
    nom: string;
    prenom: string;
    date_naiss: string;
  };

  voiture: {
    id_voiture: number;
    VIN: string;
    prix: number;
    couleur: string;
    carburant: string;
    kilometre: string;
    manuelle: string;
    typev: string;
    etat: string;
    image: string;
    modele: string;
    marque: string;
  };
}
