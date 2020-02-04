/**
 * Info: "vag" is the name of the local public transport provider (https://www.vag.de)
 * I have to use 2 API's, because those live departure data is only available for my city and not for the whole state I live in
 * Using an inoffical API found in the network devtools at https://start.vag.de/
 */


const BASE_URL = 'https://start.vag.de/dm/api'


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
  return stationsData
}