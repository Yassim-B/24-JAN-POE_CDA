"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kebab_1 = require("./Kebab");
var tableauType = [1, 2, 3];
// tableauType.push("valeur incompatible") // NE COMPILE PAS
tableauType.push(4);
console.log(tableauType);
var sandwichPouletTomate = new Kebab_1.Sandwich(new Kebab_1.Poulet("Poulet de Janzé"), new Kebab_1.Tomate("Coeur de boeuf"));
sandwichPouletTomate.afficher();
