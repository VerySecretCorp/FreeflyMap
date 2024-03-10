const header = "WKT, name"
const pointToCSV = ({ lat, lng, name }) => `POINT (${lng} ${lat}), ${name}`

export default (points) => `${header}
${points.map(pointToCSV).join("\n")}
`