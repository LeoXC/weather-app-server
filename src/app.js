const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
// Heroku will provide `process.env.PORT`
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setip handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))    // Use html files from this path (index.html)

// Define routes:
// app.get('', (req, res) => {            // Home page, now static: index.html
//     res.send('Hello express!')
// })
app.get('', (req, res) => {
    res.render('index',{                  // Hbs engine renders index.hbs file from /views 
        title: 'Weather app',
        name: 'Leonia Zajac'
    })
})

// app.get('/about', (req, res) => {        // Now static: about.html
//     res.send('<h1>Your Weather</h1>')   // Send back HTML
// })
app.get('/about', (req, res) => {        // Now static: about.html
    res.render('about',{
        title: 'About',
        name: 'Leonia Zajac'
    })
})

// app.get('/help', (req, res) => {         // Now static: help.html
//     res.send('Help page.')
// })
app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        message: 'This is help message',
        name: 'Leonia Zajac'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){             // i.e. http://localhost:3000/weather?address=Cuba
        return res.send({
            error: "You must provide an address"
        })
    }

    geocode(req.query.address, (error, {longitude,latitude,location} = {}) => {
        if (error){
            return res.send({ error })
        }else{
            forecast(longitude, latitude, (error, forcastData) => {
                if (error){
                    return res.send({ error })
                }else{
                    res.send({
                        forecast: forcastData,          // Send back object (JSON)
                        location,
                        address: req.query.address
                    })
                }
            })
        }
    })
})


app.get('/help/*', (req, res) => {
    res.render('error',{
        title: '404',
        message: 'Help article not found',
        name: 'Leonia Zajac'
    })
})

app.get('*', (req, res) => {
    res.render('error',{
        title: '404',
        message: 'Page not found.',
        name: 'Leonia Zajac'
    })
})

// Start the Web server (http://localhost:3000/)
// Heroku: use port provided by Heroku, or default 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})