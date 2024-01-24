"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jouerAuChiFouMi = function (joueur1, joueur2) {
    console.log(joueur1 + " et " + joueur2 + " joue au Chi Fou Mi");
    var vainqueur = joueur1;
    if (Math.floor(Math.random() * Math.floor(2)) == 0) {
        vainqueur = joueur2;
    }
    return vainqueur;
};
console.log("Le vainqueur est " + jouerAuChiFouMi("Julia", "Roman"));
