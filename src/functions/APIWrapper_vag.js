/**
 * Info: "vag" is the name of the local public transport provider (https://www.vag.de)
 * I have to use 2 API's, because those live departure data is only available for my city and not for the whole state I live in
 * Using an inoffical API found in the network devtools at https://start.vag.de/
 */


 
/**
 * Helpers
 */
import buildURL from './buildURL.fn'

const BASE_URL        = 'https://start.vag.de/dm/api',
      DEPARTURES_URL  = 'abfahrten.json/vgn'



/**
 * Fetches the upcoming departures for a station based on it's ID
 * @param {String} selectedStationID 
 */
export const fetchDepartures = (selectedStationID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const departuresURL = buildURL(BASE_URL, `${DEPARTURES_URL}/${selectedStationID}`)
      const departuresResponse = await fetch(departuresURL)

      if (!departuresResponse.ok)
        throw new Error('Network response was not ok.');
      
      let departuresData = await departuresResponse.json()

      resolve(departuresData)
    } catch (error) {
      console.error(error)
      reject()
    }
  })
}



/**
 * Fetches a list of station suggests based on the searchQuery
 * @param {String} searchQuery The search Query string
 */
export const fetchStations = async (searchQuery) => {
  try {
    const searchResponse = await fetch(`https://start.vag.de/dm/api/haltestellen.json/vgn?name=${searchQuery}`),
              searchData = await searchResponse.json()
      
    if (!searchResponse.ok)
      throw new Error('Network response was not ok.');

    return searchData
  } catch (error) {
    console.error(error)
  }
}