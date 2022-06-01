const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const yargs = require('yargs')

const address = process.argv[2]

if (!address){
  console.log('please, provide an address')
} else {
  console.log(process.argv)
  
  geocode.geocode(address, (error, {latitude, longitude, location} = {} ) => {
    if (error) {
      return console.log('Error', error)
    } 
      
    forecast.forecast(location, (error, data) => {
      if (error) {
        return console.log('Error', error)
      } 
      console.log('Data', data)
    })
  })    
}


yargs.parse()

