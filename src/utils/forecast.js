const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=2dd947ee33e9547aec53d53caa1966cd&query=45.99463396833994,11.760466703214213&units=m'
// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to WeatherStack.')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else{
//         const current = response.body.current
//         const city = response.body.location.name
//         console.log(city + ': ' + current.weather_descriptions[0] + '. It is currenlty ' + current.temperature + ' degrees out, but it feels like '+current.feelslike)
//     }
// })

const forecast = (longigude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2dd947ee33e9547aec53d53caa1966cd&query='+longigude+','+latitude+'&units=m'
    // request({url: url, json: true}, (error, response) => {
    // IS6 Destructuring and Property shorthand:
    // also set default "= {}" if error and not data to descruture
    request({ url, json: true}, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to WeatherStack.')
        } else if (body.error) {
            callback('Unable to find location.')
        } else{
            callback(undefined, body.location.name + ': ' + body.current.weather_descriptions[0] + '. It is currenlty ' + body.current.temperature + ' degrees out, but it feels like '+ body.current.feelslike)
        }
    })
}

module.exports = forecast