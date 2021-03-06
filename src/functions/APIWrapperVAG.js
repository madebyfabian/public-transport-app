/**
 * "VAG" is the name of the local public transport provider (https://www.vag.de).
 * I have to use 2 API's, because those live departure data is only available for my city and not for the whole state I live in.
 * Using a (maybe) unpublic API found in the network devtools at https://start.vag.de/.
 * DOCS: https://start.vag.de/dm/swagger/ui/index
 * At the time of development, API was in V1 ("PULS API 1.2")
 */
import convertAPIDataFormats from './apis/convertAPIDataFormats'
import sortByNearestLocation from './sortByNearestLocation'


const BASE_URL = 'https://start.vag.de/dm/api/v1'


/**
 * Fetches the upcoming departures for a station based on it's ID
 * @param {String} selectedStationID The VGN Station ID String
 * @param {Number} delay The departure-delay in minutes
 */
export const fetchDepartures = async (selectedStationID, delay = 0) => {
  // Example: https://start.vag.de/dm/api/v1/abfahrten.json/vgn/429?timedelay=0
  const apiRes = await fetch(`${BASE_URL}/abfahrten.json/vgn/${selectedStationID}?timedelay=${delay}`)
  if (!apiRes.ok)
    throw new Error('Network response was not ok.')
  
  let apiData = await apiRes.json()
  if (!('Abfahrten' in apiData))
    throw new Error('API Response was not as expected.')

  console.log(apiData)

  return apiData
}


/**
 * Fetches a list of stations based on the user's current position and optionally a search query.
 * @param {String} searchQuery The search Query string
 * @param {Geolocation} currPos The user's current position.
 */
export const fetchStations = async (currPos, searchQuery = null) => {
  const apiCall = async (options = { radius: 1000 }) => {
    const { latitude: givenLat, longitude: givenLon } = currPos.coords

    // Examples: https://start.vag.de/dm/api/v1/haltestellen.json/vgn/location?lat=49.4534656&lon=11.104256&radius=1000,
    //           https://start.vag.de/dm/api/v1/haltestellen.json/vgn?name=Hauptbahnhof
    let path = !searchQuery ? `location?lat=${givenLat}&lon=${givenLon}&radius=${options.radius}` : `?name=${searchQuery}`
    const stationsRes = await fetch(`${BASE_URL}/haltestellen.json/vgn/${path}`)
    if (!stationsRes.ok)
      throw new Error('Network response was not ok.');

    let apiData = await stationsRes.json()
    if (!('Haltestellen' in apiData))
      throw new Error('API Response was not as expected.')

    // Convert Api Data into our format.
    return convertAPIDataFormats(apiData['Haltestellen'], { provider: 'VAG', type: 'Haltestellen' })
  }

  let stations = await apiCall()

  // On smaller towns, it may can be that in a 1000m radius there is no station.
  if (!searchQuery && !stations.length)
    stations = await apiCall({ radius: 4000 })

  // Now sort stations by distance between station and user's curr position
  return sortByNearestLocation(stations, currPos)
}