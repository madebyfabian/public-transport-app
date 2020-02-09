/**
 * Tries to get the user's position.
 * @returns {Geolocation} The user's position.
 */
export default (options = { enableHighAccuracy: true }) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  })
}