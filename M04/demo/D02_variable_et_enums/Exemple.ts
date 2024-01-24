// Déclaration de variables en TypeScript
var unBoolean: boolean = true;
var age: number = 25;
var profession: String = 'informaticien';
// La syntaxe javascript est possible
var uneVariable: number = 10;

var uneAutreVariable: any = 10;
uneAutreVariable = 'dix';
uneAutreVariable = new Date();
console.log(uneAutreVariable);


enum Etablissement {
    Maternelle,
    Primaire,
    College,
    Lycee,
    Superieur
}

let eni: Etablissement = Etablissement.Superieur