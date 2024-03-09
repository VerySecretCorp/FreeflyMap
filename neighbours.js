import sites from './sites.json' assert { type: "json" }
import ngeohash from 'ngeohash'

function kmToGeohashPrecision(radiusKm) {
    // Approximate dimensions (width of the area) covered by each geohash precision
    const dimensionsKm = [
        5000, // 1 character
        1250, // 2 characters
        156,  // 3 characters
        39,   // 4 characters
        4.9,  // 5 characters
        1.2,  // 6 characters
        0.152,// 7 characters
        0.038,// 8 characters
        0.0048// 9 characters
    ]
    const targetWidthKm = radiusKm * 2
    const precision = dimensionsKm.findIndex(dimension => dimension <= targetWidthKm)
    return precision >= 0 ? precision + 1 : dimensionsKm.length
}

const pointsFromCenter = (collection) => async ({ lat, lng }, radiusKm) => {
    const targetGeohash = ngeohash.encode(lat, lng, kmToGeohashPrecision(radiusKm))
    const targetNeighbors = ngeohash.neighbors(targetGeohash)
    targetNeighbors.push(targetGeohash)
    return collection.filter(s =>
        targetNeighbors.some(neighbor => s.geohash.startsWith(neighbor))
    )
}

export default pointsFromCenter(sites)