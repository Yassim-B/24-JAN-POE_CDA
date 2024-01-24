function Livre(titre, sous_titre, annee, auteur) {
    this.titre = titre;
    this.sous_titre = sous_titre;
    this.annee = annee;
    this.auteur = auteur;
}

Livre.prototype.getDescription = function () {
    return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`
}

const livre = new Livre("Les visions de Dune", "Dans les creux et sillons d'Arrakis", 2020, "Vivien LeJeune")
console.table(livre)
console.log(livre.getDescription())


const LivrePrototype = {
    getDescription: function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`
    }
}

const livre2 = Object.create(LivrePrototype)
livre2.titre = 'Uncharted'
livre2.sous_titre = "Journal d'un explorateur"
livre2.annee = 2018
livre2.auteur = 'Bruno Provezza'

const livre3 = Object.create(LivrePrototype, {
    titre: {value: "Uncharted"},
    sous_titre: {value: "Journal d'un explorateur"},
    annee: {value: 2018},
    auteur: {value: 'Bruno Provezza'}
})

console.table(livre2)
console.table(livre3)
console.log(livre2.getDescription())
console.log(livre3.getDescription())