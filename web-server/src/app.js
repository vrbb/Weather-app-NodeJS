const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath =  path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
const geocode = require(path.join(__dirname,'../utils/geocode.js'))
const forecast = require(path.join(__dirname,'../utils/forecast.js'))

// Stuup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name : 'Victoria Bispo'
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
        describe : 'Please, help this page now!!',
        name : 'Victoria Bispo'

    })
})

app.get('/weather',(req, res) => {
    if (!req.query.address){
        return res.send({ 'Error': 'please, provide an address'})
    } 

    const address = req.query.address

    geocode.geocode(address, (error, {latitude, longitude, location} = {} ) => {
        if (error) {
            return res.send({ 'Error': error})
        } 
                    
        forecast.forecast(location, (error, data) => {
            if (error) {
                return res.send({ 'Error': error})
            } 
            res.send({ 'Data': data})
        })
    })    
    
    
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    } 
    res.send({
        products: []
    })
    
})

// app.com
// app.com/help
// app.com/about

app.get('/help/*', (req,res) => {
    res.render('help', {
        title: 'PAGE 404',
        describe : 'Help article not found',
        name : 'Victoria Bispo'

    })
})

app.get('*',(req,res) => {
    res.render('help', {
        title: 'PAGE 404',
        describe : 'Page not found',
        name : 'Victoria Bispo'

    })
})


app.listen(3131, () => {
    console.log('Server is up on port 3131.')
})