const express = require('express')
const geocode = require('/Users/vntvibe/Documents/Projetos de estudo/Weather-app-NodeJS/utils/geocode.js')
const forecast = require('/Users/vntvibe/Documents/Projetos de estudo/Weather-app-NodeJS/utils/forecast.js')

const app = express()
const address = process.argv[2]

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req,res) => {
    res.send('<h1>Help page</h1>')
})

app.get('/about', (req,res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather',(req, res) => {
    
        if (!address){
            res.send({ 'Error': 'please, provide an address'})
        } else {
            
            geocode.geocode(address, (error, {latitude, longitude, location} = {} ) => {
              if (error) {
                res.send({ 'Error': error})
              } 
                
              forecast.forecast(location, (error, data) => {
                if (error) {
                  res.send({ 'Error': error})
                } 
                res.send({ 'Data': data})
              })
            })    
        }
    
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})