console.group('synchrone')

function synchrone() {
    let i = 0
    while (i < 1000000000) {
        i++;
    }
}

console.time('ensemble')
console.time('avant')
console.log('avant')
console.timeEnd('avant')
console.time('synchrone')
synchrone()
console.log('synchrone')
console.timeEnd('synchrone')
console.time('apres')
console.log('apres')
console.timeEnd('apres')
console.timeEnd('ensemble')
console.groupEnd()


console.group('promesse')

function promesse() {
    return Promise.resolve().then(
        t => {
            let i = 0
            while (i < 1000000000) {
                i++;
            }
            return ('Promesse');
        }
    )
}

console.time('ensemble')
console.time('avant')
console.log('avant')
console.timeEnd('avant')
console.time('promesse')
promesse().then((retour) => console.log(retour))
console.timeEnd('promesse')
console.time('apres')
console.log('apres')
console.timeEnd('apres')
console.timeEnd('ensemble')
console.groupEnd()


const getAnimal = (nom) => {
    const animaux = {
        'singe': '\uD83D\uDC35', // 🐵 (U+1F435)
        'chien': '\uD83D\uDC36', // 🐶 (U+1F436)
        'loup': '\uD83D\uDC3A',  // 🐺 (U+1F43A)
        'renard': '\uD83E\uDD8A', // 🦊 (U+1F98A)
        'licorne': '\uD83E\uDD84', // 🦄 (U+1F984)
        'lapin': '\uD83D\uDC30'  // 🐰 (U+1F430)
    }
    return Promise.resolve(animaux[nom]);
}
getAnimal('renard').then(console.log);

const zoo1 = async () => {
    const lapin = await getAnimal('lapin');
    const loup = await getAnimal('loup');
    const chien = await getAnimal('chien');
    const singe = await getAnimal('singe');

    return [lapin, loup, chien, singe]
}
zoo1().then(console.log)

