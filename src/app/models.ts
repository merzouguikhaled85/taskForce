export interface medecin {
  nom: string;
  prenom: string;
  age: number;
  grade: string;
  photo: string;
}

export interface provider {
  id?: number;
  name: string;
  address: string;
  email: string;
}


export interface articleOut {
  id?: number;
  label: string;
  price: string;
  picture: string;
  provider:provider
}


export interface articleIn {
  id?: number;
  label: string;
  price: string;
  picture: string;

}

export interface article {
  id?: number;
  label: string;
  price: string;
  picture: string;
  provider?:provider
}

