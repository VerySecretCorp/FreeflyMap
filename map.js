import { MarkerClusterer } from '@googlemaps/markerclusterer'
import debounce from './debounce'

const getRadiusFromPoints = (neCoords, centerCoords) => {
  const earthRadius = 6378.8
  const radians = 57.2958
  const neLatRadians = neCoords.lat / radians
  const neLngRadians = neCoords.lng / radians
  const cLatRadians = centerCoords.lat / radians
  const cLngRadians = centerCoords.lng / radians
  return earthRadius * Math.acos(
      Math.sin(cLatRadians) * Math.sin(neLatRadians) +
      Math.cos(cLatRadians) * Math.cos(neLatRadians) * Math.cos(neLngRadians - cLngRadians)
  )
}

let maxVisible = 100
let allPointsByGeohash = {}

const visiblePoints = (bounds) =>
  Object.values(allPointsByGeohash)
    .filter(point => bounds.contains(point))
    .slice(0, maxVisible)

const updateAllPoints = async (bounds) => {
  const pointsFromCenter = (await import('./neighbours')).default
  const center = { lat: bounds.getCenter().lat(), lng: bounds.getCenter().lng() }
  const neCords = { lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng() }

  const points = await pointsFromCenter(center, getRadiusFromPoints(neCords, center))
  return allPointsByGeohash = points.reduce((acc, current) => {
    acc[current.geohash] = current
    return acc
  }, allPointsByGeohash)
}

const siteToMarker = (Marker, infoWindow) => (site => {
  const marker = new Marker({ position: site })

  marker.addListener('gmp-click', () => {
    infoWindow.setContent(site.name)
    infoWindow.open(map, marker)
  })
  return marker
})

const onPlacesChanged = (searchBox, marker, Bounds, map) => () => {
  const places = searchBox.getPlaces()
  if (places.length === 0) return

  const place = places[0]
  if (!place.geometry) {
    console.log("Returned place contains no geometry")
    return
  }
  marker.setTitle = place.name
  marker.position = place.geometry.location

  const bounds = new Bounds()
  if (place.geometry.viewport) {
    bounds.union(place.geometry.viewport)
  } else {
    bounds.extend(place.geometry.location)
  }
  map.fitBounds(bounds)
}

const onBoundsChanged = (map, searchBox, infoWindow, Marker, MarkerClusterer) => async () => {
  const mapBounds = map.getBounds()
  searchBox.setBounds(mapBounds)
  await updateAllPoints(mapBounds)

  new MarkerClusterer({
    markers: visiblePoints(mapBounds).map(siteToMarker(Marker, infoWindow)),
    map
  })
}

const setupListeners = async ({
  map, searchBox, InfoWindow, Marker, MarkerClusterer, LatLngBounds
}) => {
  map.addListener('bounds_changed', debounce(onBoundsChanged(
    map,
    searchBox,
    new InfoWindow(),
    Marker,
    MarkerClusterer
  ), 500))

  searchBox.addListener('places_changed', onPlacesChanged(
    searchBox,
    new Marker({ map }),
    LatLngBounds,
    map
  ))
}

const initMap = ({ mapElement, searchBoxInputElement, initialPosition }) => async () => {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps")
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
  const { SearchBox } = await google.maps.importLibrary("places")
  const { LatLngBounds } = await google.maps.importLibrary("core")

  const searchBox = new SearchBox(searchBoxInputElement)

  const map = new Map(mapElement, {
    zoom: 13,
    center: initialPosition,
    mapId: "myPgMapId",
  })
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBoxInputElement)

  setupListeners({
    map,
    searchBox,
    InfoWindow,
    Marker: AdvancedMarkerElement,
    MarkerClusterer,
    LatLngBounds
  })
}

export { initMap }