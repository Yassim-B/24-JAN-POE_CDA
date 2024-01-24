// Définition d'une "interface"

const FormeGeometrique = {
    calculerAire() {
        // La méthode calculer aire doit etre implémentée
        throw new Error("La méthode 'calculerAire' doit être implémenté")
    },
    afficher() {
        // La méthode afficher doit etre implémentée
        throw new Error("La méthode 'afficher' doit être implémenté")
    }
}

// Implémentation d'une interface pour Cercle

const Cercle = {
    rayon: 5,
    calculerAire() {
        return Math.PI * this.rayon ** 2
    }, afficher() {
        console.log(`Cercle de rayon ${this.rayon}`)
    }
}