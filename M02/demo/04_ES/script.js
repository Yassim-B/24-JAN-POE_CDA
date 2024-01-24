// Décomposition (Spread)
const tableau1 = [1, 2, 3]
const tableau2 = [...tableau1, 4, 5]
const tableau3 = [...tableau1, ...tableau2]
console.log(tableau3)

// Destructuration

//Définir un objet
const personne = {nom: 'John', age: 30, ville: 'New York'};

// Destructuration de l'objet
const {nom, age, ville} = personne;

console.log(nom)
console.log(age)
console.log(ville)

// Exemple avec un tableau de fruit

const fruits = ['Pomme', 'Banane', 'Orange']
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// big int
const unTresGrandNombre = 123456789123456789123456789n;
console.log(unTresGrandNombre)

// Séparateur de millier
const milliard = 1_000_000_000;
console.log(milliard)

// Elvis operator
let christine = {
    nom: 'christine',
    adresse: {
        numero: 42,
        rue: 'acacia'
    }
}

if (christine) {
    if (christine.adresse) {
        if (christine.adresse.rue) {
            console.log(christine.adresse.rue)
        }
    }
}

console.log(christine?.adresse?.rue);

// ?? : valeur par défaut

let ordinateur = {
    tps_de_traitement: 0
}

const duree = ordinateur?.tps_de_traitement ?? 50; // La durée est de 50 si tps_de_traitementest null