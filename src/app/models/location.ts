export interface Location {
  id_location: number;
  lieu_dep: string;
  lieu_arr: string;
  date_debut: string;
  date_fin: string;

  clientIntern: {
    id_client: number;
    nom: string;
    prenom: string;
    date_naiss: string;
  };

  voitureIntern: {
    id_voiture: number;
    prix: number;
    couleur: string;
    carburant: string;
    kilometre: string;
    manuelle: string;
    typev: string;
    etat: string;
    modele: string;
    marque: string;
  };
}
