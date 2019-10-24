/**
 * Builds a URL from the following parameters
 * @param {string} baseURL the API base URL
 * @param {string} URLPath the APi path
 * @param {Object} params  the URL Query parameters formatted as object 
 */
export default (baseURL, URLPath, params = {}) => {
  const query = Object.keys(params).map(k => k + '=' + params[k]).join('&')
  const URL = `${baseURL}/${URLPath}?${query}`

  return URL
}