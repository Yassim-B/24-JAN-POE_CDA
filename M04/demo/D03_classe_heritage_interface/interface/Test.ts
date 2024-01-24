import {Jouable} from "./Jouable";
import {SportJouable} from "./SportJouable";

let badminton: Jouable = new SportJouable("Badminton", "Un sport fatigant")
console.log("Le vainqueur est : " + badminton.jouer("Batman", "Superman"))