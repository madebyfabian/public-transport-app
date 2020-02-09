const providerVAG = (data, type) => {
  switch (type) {

    case 'Haltestellen': 
      return data.map(value => {
        const name = value.Haltestellenname.split('(')
        return {
          id: value.VGNKennung, 
          name: {
            main: name[0].trim(),
            sub: name[1].replace(')', '')
          },
          lat: value.Latitude,
          lon: value.Longitude
        }
      })

    default:
      return
  }
}


export default (data, options = { provider: null, type: null }) => {
  if (!data || !options || !options.provider || !options.type)
    throw new Error('Error with function parameters :/')

  const { type } = options

  switch (options.provider) {
    case 'VAG':
      return providerVAG(data, type)
  
    case 'DB':
      return null // providerDB(data, type)
  }
}