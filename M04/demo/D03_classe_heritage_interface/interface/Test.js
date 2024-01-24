"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SportJouable_1 = require("./SportJouable");
var badminton = new SportJouable_1.SportJouable("Badminton", "Un sport fatigant");
console.log("Le vainqueur est : " + badminton.jouer("Batman", "Superman"));
