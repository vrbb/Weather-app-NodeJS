const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath =  path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
// const htmlPage = require(dirName+'/index.html')
// const geocode = require(dirName+'/utils/geocode.js')
// const forecast = require(dirName+'/utils/forecast.js')

// Stuup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name : 'this is a name'
    })
})

app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About me',
        name : 'Victoria Bispo'
    })
})

app.get('/help',(req,res) => {
    res.render('help', {
        title: 'HELP PAGE NOW',
        describe : 'Please, help this page now!!'
    })
})

app.get('/weather',(req, res) => {
    
    // if (!address){
    //     res.send({ 'Error': 'please, provide an address'})
    // } else {
        
    //     geocode.geocode(address, (error, {latitude, longitude, location} = {} ) => {
    //     if (error) {
    //         res.send({ 'Error': error})
    //     } 
                
    //         forecast.forecast(location, (error, data) => {
    //             if (error) {
    //                 res.send({ 'Error': error})
    //             } 
    //         res.send({ 'Data': data})
    //         })
    //     })    
    // }
    
})

// app.com
// app.com/help
// app.com/about

app.listen(3131, () => {
    console.log('Server is up on port 3131.')
})