export default (originalStr) => {
  let arr = originalStr.split(':')

  arr[0] = parseInt(arr[0])
  arr[1] = parseInt(arr[1])

  let returnStr = arr[1] + ' Min.'

  // If 1 or more hrs
  if (arr[0] > 0)
    returnStr = `${arr[0]} Std., ${returnStr}`

  return returnStr
}