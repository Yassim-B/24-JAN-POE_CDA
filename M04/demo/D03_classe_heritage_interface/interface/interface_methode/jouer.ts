export interface jouer {
    (joueur1: string, joueur2: string): string
}

let jouerAuChiFouMi: jouer = function (joueur1, joueur2): string {
    console.log(joueur1 + " et " + joueur2 + " joue au Chi Fou Mi")

    let vainqueur = joueur1;
    if (Math.floor(Math.random() * Math.floor(2)) == 0) {
        vainqueur = joueur2;
    }
    return vainqueur

}

console.log("Le vainqueur est " + jouerAuChiFouMi("Julia", "Roman"));