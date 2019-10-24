/**
 * Info: "db" stands for Deutsche Bahn, (https://www.bahn.de), which is the operating company bavaria (the state I live in Germany) for trains across cities
 * Using an inoffical API found in the network devtools at https://www.bayern-fahrplan.de/m5/de/#trips
 */



/**
 * Helpers
 */
const BASE_URL      = 'https://www.bayern-fahrplan.de/jqm/beg_lite',
      JOURNEYS_URL  = 'XML_TRIP_REQUEST2',
      STATIONS_URL  = 'XML_STOPFINDER_REQUEST'

const buildURL = (URLPath, params) => {
  let query = Object.keys(params).map(k => k + '=' + params[k]).join('&')
  return `${BASE_URL}/${URLPath}?${query}`
}



/**
 * Getting the available journeys based on start & destination
 * @param {string} start id
 * @param {string} dest  id
 */
export const fetchJourneys = async ({ start, destination }) => {
  try {
    let params = { 
      convertStopsPTKernel2LocationServer: '1',
      genMaps: '0',
      itOptionsActive: '1',
      locationServerActive: '1',
      name_origin: start,
      name_destination: destination,
      ptOptionsActive: '1',
      stateless: '1',
      type_destination: 'any',
      type_origin: 'any',
      useRealtime: '1',
      coordOutputFormat: 'MRCV',
      coordListOutputFormat: 'STRING',
      deleteITPTWalk: '1',
      genC: '1',
      language: 'de',
      imparedOptionsActive: '1',
      includedMeans: '1',
      inclMOT_0: '1',
      inclMOT_1: '1',
      inclMOT_2: '1',
      inclMOT_3: '1',
      inclMOT_4: '1',
      inclMOT_5: '1',
      inclMOT_6: '1',
      inclMOT_7: '1',
      inclMOT_8: '1',
      inclMOT_9: '1',
      inclMOT_10: '1',
      inclMOT_11: '1',
      inclMOT_12: '1',
      inclMOT_13: '1',
      inclMOT_14: '1',
      inclMOT_15: '1',
      inclMOT_16: '1',
      inclMOT_17: '1'
    }

    const journeys = await (await fetch(buildURL(JOURNEYS_URL, params))).json()

    if (!journeys.trips)
      throw new Error('No journeys found')

    return journeys
  } catch (error) {
    console.error('bayernFahrplanAPI', error)
  }
}



/**
 * Find stations suggestions based on a search query
 * @param {*} searchQuery 
 */
let controller = new AbortController(),
    usedAbortController = false

export const fetchStations = async (searchQuery) => {
  try {
    // if the current AbortController has been used before, abort the pending request and reset it
    if (usedAbortController) {
      controller.abort()

      // reset AbortController
      controller = new AbortController() 
    }

    usedAbortController = true

    const params = {
      type_sf: 'any',
      coordOutputFormat: 'MRCV',
      locationServerActive: '1',
      odvSuggestMacro: 'beg',
      outputOptionsActive: '1',
      prepareOdvMode: '1',
      prMinQu: '1',
      w_prefStModesAm: [ '3', '1' ],
      w_regPrefAl: '1',
      language: 'de',
      // name_sf: 'Nürnberg, ' + searchQuery
      name_sf: searchQuery
    }

    const suggestionsOptions  = { signal: controller.signal },
          suggestionsRes      = await fetch(buildURL(STATIONS_URL, params), suggestionsOptions),
          suggestions         = await suggestionsRes.json()

    if (suggestions.stopFinder.length === 0)
      throw new Error('nothing found')

    // if the request has only a single result, the API does some bullshit
    // it replaces the array with a single object... so we have to fix it
    if (suggestions.stopFinder.point) {
      let arr = []
      arr.push(suggestions.stopFinder.point)
      suggestions.stopFinder = arr
    }

    return suggestions.stopFinder
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error)
      alert(error.message)
    }
     
  }
}



/**
 * fetch the nearest station ID by providing user position geolocation data 
 * @param {Geolocation} geolocationData Standard JavaScript GeoLocation Object 
 */
export const fetchNearestStation = async (geolocationData) => {
  try {
    const params = {
      stateless: '1',
      type_sf: 'coord',
      convertCoord2LocationServer: '1',
      coordOutputFormat: 'MRCV',
      name_sf: `${geolocationData.longitude}:${geolocationData.latitude}:WGS84[DD.ddddd]`
    }

    const nearestStationRes  = await fetch(buildURL(STATIONS_URL, params)),
          nearestStation     = await nearestStationRes.json()

    if (!nearestStation.stopFinder)
      throw new Error('Error while getting users nearest station.')

    return nearestStation.stopFinder.point
  } catch (error) {
    console.error(error)
  }
}