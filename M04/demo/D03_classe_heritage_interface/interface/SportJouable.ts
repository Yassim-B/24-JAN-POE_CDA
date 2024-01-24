import {Sport} from "../classe_simple/Sport";
import {Jouable} from "./Jouable";

export class SportJouable extends Sport implements Jouable {
    jouer(joueur1: string, joueur2: string): string {
        let vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        return vainqueur
    }

}