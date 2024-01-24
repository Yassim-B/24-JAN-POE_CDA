export class Sport {
    public nom: String;
    private prive: String;
    private description: String;

    constructor(nom: string, description: string) {
        this.nom = nom;
        this.description = description
        this.prive = "valeur cache";
    }

    public afficher(): void {
        console.log(`${this.nom} - ${this.description}`)
    }


}