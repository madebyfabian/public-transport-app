/**
 * "VAG" is the name of the local public transport provider (https://www.vag.de).
 * I have to use 2 API's, because those live departure data is only available for my city and not for the whole state I live in.
 * Using a (maybe) unpublic API found in the network devtools at https://start.vag.de/.
 * DOCS: https://start.vag.de/dm/swagger/ui/index
 * At the time of development, API was in V1 (1.2)
 */


const BASE_URL = 'https://start.vag.de/dm/api/v1'


/**
 * Fetches the upcoming departures for a station based on it's ID
 * @param {String} selectedStationID The VGN Station ID String
 * @param {number} delay The departure-delay in minutes
 */
export const fetchDepartures = async (selectedStationID, delay = 0) => {
  const departuresRes = await fetch(`${BASE_URL}/abfahrten.json/vgn/${selectedStationID}?timedelay=${delay}`)
  if (!departuresRes.ok)
    throw new Error('Network response was not ok.')
  
  const departuresData = await departuresRes.json()
  return departuresData
}


/**
 * Fetches a list of station suggests based on the searchQuery
 * @param {String} searchQuery The search Query string
 */
export const fetchStations = async (searchQuery) => {
  const stationsRes = await fetch(`${BASE_URL}/haltestellen.json/vgn?name=${searchQuery}`)
  if (!stationsRes.ok)
    throw new Error('Network response was not ok.');

  const stationsData = await stationsRes.json()
  return stationsData.Haltestellen
}


/**
 * Fetches a list of stations that are around you, by sending the current coords (lat & lon) to our own API, 
 * which gives us a list of stations bask. 
 * Attention! Since the list is in a different format, we have to send the ID we get to the VAG API to get back the right format -.-
 * @param {number} givenLat Float of the latitude of the curr position.
 * @param {number} givenLat Float of the longitude of the curr position.
 */
export const fetchStationsByCoords = async (givenLat, givenLon) => {
  // First, calc the cos of the lat (to pay attention to the curvature of the earth, see: https://stackoverflow.com/a/39298241)
  const givenLatCos = Math.pow(Math.cos(givenLat * Math.PI / 180), 2),
        givenRadius = 1000

  const apiCall = async (radius = 1000) => {
    const stationsRes = await fetch(`${BASE_URL}/haltestellen.json/vgn/location?lat=${givenLat}&lon=${givenLon}&radius=${givenRadius}`)
    if (!stationsRes.ok)
      throw new Error('Network response was not ok.')

    return await (await stationsRes.json()).Haltestellen
  }

  let stationsData = await apiCall()

  // On smaller towns, it may can be that in a 1000m radius there is no station.
  if (stationsData.length === 0) {
    console.log('GET THAT RADIUS BIGGER!')
    stationsData = await apiCall(4000)
  }
    
  
  // Now we have an array of UNSORTED stations that are in the radius.
  // Calculate the distance between users location and the station location
  stationsData = stationsData.map(station => {
    station.distance = ((station.Latitude - givenLat) * (station.Latitude - givenLat)) + ((station.Longitude - givenLon) * (station.Longitude - givenLon) * givenLatCos)
    return station
  })

  // Sort by distance to get the nearest station
  return stationsData.sort((a, b) => {
    return a.distance - b.distance
  })
}