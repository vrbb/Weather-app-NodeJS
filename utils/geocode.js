const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmljdG9yaWFiaXNwbyIsImEiOiJjbDN0MmpiZ3cxeHlyM2VwNzZ6N21rNXViIn0.fLe2oxIBNu_7xNPZlALvUg'
  
        request({ url: url, json: true}, (error, response) => {
        if (error) {
          callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
          callback('Unable to find location. Try another search.',undefined)
        } else {
          callback(undefined,{
            longitude : JSON.stringify(response.body.features[0].center[0]),
            latitude : JSON.stringify(response.body.features[0].center[1]),
            location : JSON.stringify(response.body.features[0].place_name)
          })
        }
    })
}

module.exports = {
    geocode : geocode,
}
