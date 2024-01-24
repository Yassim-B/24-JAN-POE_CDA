let map;
let marker;

// Récupérer les coordonnées actuelles de la station spatiale à partir du fichier json

function getLatLong() {


    fetch("http://api.open-notify.org/iss-now.json")
        .then(data => data.json())
        .then(json => {
                const latitude = json['iss_position']['latitude']
                const longitude = json.iss_position.longitude
                document.getElementById('position').innerText = latitude + ' ' + longitude
                // MAJ de la position du marqueur sur la page (provient de leaflet)
                marker.setLatLng([latitude, longitude]);
                // Déplacement de la carte vers les nouvelles coordonnées
                map.flyTo([latitude, longitude])

            }
        )
}

function init() {
    // Création d'une carte leaflet centré sur les coordonnées de l'école ENI Chartres de bretagne,
    // avec un zoom initial de 13

    map = L.map('map').setView([48.0389009, -1.69238], 13)

    // Création une icone personnalisé de ISS
    let uneIcone = L.icon({
        iconUrl: 'image/iss.png',
        iconSize: [64, 64],
        iconAnchor: [32, 32],
        popupAnchor: [-3, -76]
    })

    // Création d'un marqueur avec l'icone personnalisé et ajout au groupe de couche de la carte
    marker = L.marker([48.0389009, -1.69238], {icon: uneIcone}).addTo(map)

    // Ajout d'une couche de tuiles OpenStreetMap à la carte
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19
    }).addTo(map);

    // Mise en place d'une fonction répetitive qui appelle getlagLong toutes les 5 seconds

    setInterval(getLatLong, 5000)

}

onload = init