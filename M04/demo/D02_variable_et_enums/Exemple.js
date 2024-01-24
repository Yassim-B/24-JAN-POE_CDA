// Déclaration de variables en TypeScript
var unBoolean = true;
var age = 25;
var profession = 'informaticien';
// La syntaxe javascript est possible
var uneVariable = 10;
var uneAutreVariable = 10;
uneAutreVariable = 'dix';
uneAutreVariable = new Date();
console.log(uneAutreVariable);
var Etablissement;
(function (Etablissement) {
    Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
    Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
    Etablissement[Etablissement["College"] = 2] = "College";
    Etablissement[Etablissement["Lycee"] = 3] = "Lycee";
    Etablissement[Etablissement["Superieur"] = 4] = "Superieur";
})(Etablissement || (Etablissement = {}));
var eni = Etablissement.Superieur;
