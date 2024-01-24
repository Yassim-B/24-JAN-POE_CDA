fetch('https://pokeapi.co/api/v2/pokemon/druddigon')
    .then(r => r.json())
    .then(reponse => {
        let image = document.createElement('img')
        image.src = reponse["sprites"]["other"]["home"]["front_default"]
        document.getElementById('pikachu').appendChild(image)
    })