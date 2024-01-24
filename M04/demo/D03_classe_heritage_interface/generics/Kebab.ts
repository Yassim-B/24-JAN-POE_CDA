// Déclaration d'une classe Générique
export class Viande {
    constructor(public type: string) {
    }
}

export class Legume {
    constructor(public type: string) {
    }
}

export class Poulet extends Viande {

}

export class Boeuf extends Viande {

}

export class Tomate extends Legume {

}

export class Salade extends Legume {

}

export class Sandwich<V extends Viande, L extends Legume> {
    constructor(public viande: V, public legume: L) {
    }

    public afficher(): void {
        console.log("Sandwitch " + this.viande.type + "/" + this.legume.type)
    }
}