import {Poulet, Sandwich, Tomate} from "./Kebab";

let tableauType: number[] = [1, 2, 3]
// tableauType.push("valeur incompatible") // NE COMPILE PAS
tableauType.push(4)
console.log(tableauType)


let sandwichPouletTomate: Sandwich<Poulet, Tomate> = new Sandwich<Poulet, Tomate>(
    new Poulet("Poulet de Janzé"),
    new Tomate("Coeur de boeuf")
)

sandwichPouletTomate.afficher()