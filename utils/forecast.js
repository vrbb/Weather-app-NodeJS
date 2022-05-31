const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6951e9376fe92546452d018547e800ee&query=' + encodeURIComponent(address)
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (response.success) {
            callback({
                data : JSON.parse(response.body)
                
            }, undefined)
        } else {
            callback(undefined, response.body.current)
        }
      
    })
}

module.exports = {
    forecast: forecast
}