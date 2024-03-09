import fetch from 'node-fetch'
import sites from './sites.json' assert { type: "json" }
import { promisify } from 'util'
import fs from 'fs'

// let globalDelay = 0

// const delay = promisify(setTimeout)

// const delayedFetch = async (...args) => {
//     globalDelay+= 500
//     await delay(globalDelay)
//     return fetch(...args).then(r => r.json())
// }

// const getFullSite = async (site) =>
//     delayedFetch(`https://www.paraglidingmap.com/api/launches/${site.pgMapId}?languageIsoCode=EN&offset=0&isForecastPurchased=true&isSubscriber=true&unitsAltitude=m&unitsDistance=km&unitsSpeed=km/h&unitsTemperature=C&unitsPrecipitation=mm&unitsPressure=hPa`)
//     .then(({ launch: { details } }) => {
//         process.stdout.write(`${site.pgMapId},`)
//         return { ...site, details }
//     })
//     .catch(error => {
//         console.error(`Error fetching site ${site.pgMapId} - ${error}`)
//     })

// // const repeated = new Set()
// // const uniqueSites = []
// // sites.forEach(site => {
// //     if(!repeated.has(site.pgMapId)) {
// //         repeated.add(site.pgMapId)
// //         uniqueSites.push(site)
// //     }
// // })

const hashes = new Set()

const unique = sites.filter((site) => {
    if(hashes.has(site.name)) return false
    hashes.add(site.name)
    return true
})

console.log(unique.length, sites.length);

// fs.writeFile("uniqueSites.json", JSON.stringify(unique), console.error)