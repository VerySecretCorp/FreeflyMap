import { initMap } from "../map";

initMap({
    mapElement: document.getElementById("map"),
    searchBoxInputElement: document.getElementById('search-input'),
    initialPosition: { lat: 55.953251, lng: -3.188267 },
})()