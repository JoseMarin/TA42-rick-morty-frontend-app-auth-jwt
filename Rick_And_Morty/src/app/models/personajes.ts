//CLASE PERSONAJES SOBRE A QUE CONSTRUIREMOS TODO EL CRUD
export class Personajes {
  id?: any;
  name? : string;
  status? : string; //SE PODRÁ CAMBIAR A VIVO O MUERTO
  species? : string;
  gender? : string;
  origin? : string;
  location? : string;
  image : string = "https://rickandmortyapi.com/api/character/avatar/183.jpeg";
}
