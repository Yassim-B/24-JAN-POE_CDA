import {Sport} from "../classe_simple/Sport";

export class SportDeCompetition extends Sport {

    constructor(nom: string, description: string, public niveau: string) {
        super(nom, description);
    }

    public afficher() {
        super.afficher();
        console.log("Niveau : " + this.niveau)
    }

}