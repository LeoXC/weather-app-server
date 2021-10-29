const request = require('request')

// const url_geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Arsie.json?access_token=pk.eyJ1IjoibGVvbmlhMjAyMSIsImEiOiJja3VpNDdwYnIwNjk3MndwZXIzeGN5MGZiIn0.AQ89_QoaFbEcMliXUAUGvQ'
// request({url: url_geo, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to WeatherStack.')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location of this coordinates.')
//     } else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibGVvbmlhMjAyMSIsImEiOiJja3VpNDdwYnIwNjk3MndwZXIzeGN5MGZiIn0.AQ89_QoaFbEcMliXUAUGvQ'

    // request({url: url, json: true}, (error, response) => {
    // IS6 Destructuring and Property shorthand:
    // also set default "= {}" if error and not data to descruture
    request({ url, json: true}, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to WeatherStack.')
        } else if (body.features.length === 0) {
            callback('Unable to find location of this coordinates.')
        } else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode