import { initMap } from "../map";
let { GMAPS_API_KEY } = process.env;

window.GMAPS_API_KEY = GMAPS_API_KEY

initMap({
    mapElement: document.getElementById("map"),
    searchBoxInputElement: document.getElementById('search-input'),
    initialPosition: { lat: 55.953251, lng: -3.188267 },
})()