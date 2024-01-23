console.group("Type de données : ")
let jedi = "Obi-Wan Kenobi";
let sith = "Anakin Skywalker";
let aujourdhui = new Date();
let planetes = ["Tatooine", "Dagobah", "Naboo", "Aldérande"];
console.log(typeof jedi);
console.log(typeof sith)
console.log(typeof aujourdhui)
console.log(typeof planetes)
console.groupEnd()

console.group("Structure  de code :")
console.log("Les planètes avec une boucle for..of :")
for (const planet of planetes) {
    console.dir(planet)
}
console.log("Une condition : ")
if (aujourdhui.getDate() % 2 == 0) {
    sith = "Dark Vador"
}
console.dir(sith)
console.groupEnd()

console.group("Fonctions : ")

function code_jedi(index) {
    const principes = [
        "Il n'y a d'émotion, il y a la paix",
        "Il n'y a pas d'ignorance, il y a la connaissance",
        "Il n'y a pas de passion, il y a la sérénité",
        "Il n'y a pas de choas, il y a l'harmonie"
    ]
    return principes[index]
}

console.log(code_jedi(2))
console.groupEnd()