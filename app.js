const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')



const geoData = geocode.geocode('Philadelphia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
  return data
})


forecast.forecast('Philadelphia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
