const request = require('request')
const geocode = require('./utils/geocode.js')
// const url = 'http://api.weatherstack.com/current?access_key=6951e9376fe92546452d018547e800ee&query=New%20York'

// request({ url: url}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else if (response.body.error){
//     console.log(response.body.error)
//   } else {
//     const data = JSON.parse(response.body)
//     const temperature = JSON.stringify(data.current.temperature)
//     const humidity = JSON.stringify(data.current.humidity)
//     console.log('It is currently '+temperature+' degrees out. There is a '+humidity+' humidity here')
//   }

// })

// const urlMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmljdG9yaWFiaXNwbyIsImEiOiJjbDN0MmpiZ3cxeHlyM2VwNzZ6N21rNXViIn0.fLe2oxIBNu_7xNPZlALvUg'

// request({url: urlMap}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to mapbox service')
//   }  else if (response.body.features.length === 0) {
//     console.log(response.body.message)
//   } else {
//     const data = JSON.parse(response.body)
//     const long = JSON.stringify(data.features[0].center[0])
//     const lat = JSON.stringify(data.features[0].center[1])
  
//     console.log('Latitude: '+lat+', Longitude: '+long)
//   }
// })




geocode.geocode('Philadelphia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

