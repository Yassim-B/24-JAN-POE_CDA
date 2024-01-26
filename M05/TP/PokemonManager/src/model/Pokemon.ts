import {Type} from "./Type";

export class Pokemon {
  id: string;
  name: string;
  type: Type[];
  height: string;
  weight: string;
  categorie: string;

  constructor(id: string, name: string, type: Type[], height: string, weight: string, categorie: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.height = height;
    this.weight = weight;
    this.categorie = categorie;
  }
}
