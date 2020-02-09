/**
 * Sorts an Array of Objects with coordinates by the nearest.
 * @param {Array} data The Array of Objects [ { lat: Number, lon: Number }, ... ].
 * @param {Geolocation} currPos The user's location.
 */
export default (data, currPos) => {
  const { latitude: givenLat, longitude: givenLon } = currPos.coords
  
  // First, calc the cos of the lat (to pay attention to the curvature of the earth, see: https://stackoverflow.com/a/39298241)
  const givenLatCos = Math.pow(Math.cos(givenLat * Math.PI / 180), 2)

  // Sort by distance to get the nearest station
  return data.sort((a, b) => {
    return calcDistance(a, givenLat, givenLon, givenLatCos) - calcDistance(b, givenLat, givenLon, givenLatCos)
  })
}


const calcDistance = (obj, givenLat, givenLon, givenLatCos) => {
  return ((obj.lat - givenLat) * (obj.lat - givenLat)) + ((obj.lon - givenLon) * (obj.lon - givenLon) * givenLatCos)
}