/**
 * Loops & parses the String of a passedStop array inside a leg (leg = interchange).
 * A string will look like this: "80002933;Nürnberg-Dürrenhof;20191020;0944;1235244.00000:5648640.00000:MRCV;1".
 */
export default (passedStops) => {
  try {
    // First check, if array only has a single item in it, because then, it's an object
    // Then it would be { stop: "..." } instead of ["...", "..."]
    if (passedStops.hasOwnProperty('stop'))
      passedStops = Object.values(passedStops)

    let passedStopsArr = []
    
    for (let k = 0; k < passedStops.length; k++) {
      const str = passedStops[k],
            arr = str.split(';')

      // If something is wrong with the format of the passedStop Array
      if (arr.length !== 6)
        break;

      let date = arr[2], time = arr[3]
      time = {
        hours: time.substr(0, 2),
        min: time.substr(2, 4)
      }
      date = {
        year: date.substr(0, 4),
        month: date.substr(4, 2),
        day: date.substr(6, 2)
      }

      const timestamp = new Date(date.year, (+date.month-1), date.day, time.hours, time.min)

      // @author: https://medium.com/@esganzerla/simple-date-validation-with-javascript-caea0f71883c
      const isValidDate = (Boolean(+timestamp) && timestamp.getDate() == date.day)

      const hours = timestamp.getHours().toString().padStart(2, 0),
            minutes = timestamp.getMinutes().toString().padStart(2, 0)
      
      passedStopsArr.push({
        id: parseInt(arr[0]),
        name: arr[1],
        time: (isValidDate) ? `${hours}:${minutes}` : false,
        location: arr[4]
      })
    }

    return passedStopsArr
  } catch (error) {
    return false
  }
}