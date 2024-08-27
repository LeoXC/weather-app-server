Sample application created for course: 
[The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/?couponCode=SKILLS4SALEB)

My Notes:

———— Weather APP
```
http://api.weatherstack.com/
```
Your API Access Key: 2dd947ee33e9547aec53d53caa1966cd

// Current Weather API Endpoint

```
http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
``` 
// optional parameters: 

    & units = m
    & language = en
    & callback = MY_CALLBACK

// Sample request (for weather info, for given location)

```
http://api.weatherstack.com/current?access_key=2dd947ee33e9547aec53d53caa1966cd&query=45.99463396833994,11.760466703214213
```

// JSON response

```
{"request":{"type":"LatLon","query":"Lat 45.99 and Lon 11.76","language":"en","unit":"m"},"location":{"name":"Arsie","country":"Italy","region":"Veneto","lat":"45.983","lon":"11.750","timezone_id":"Europe\/Rome","localtime":"2021-10-07 14:14","localtime_epoch":1633616040,"utc_offset":"2.0"},"current":{"observation_time":"12:14 PM","temperature":4,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":26,"wind_degree":10,"wind_dir":"N","pressure":1019,"precip":0.1,"humidity":56,"cloudcover":50,"feelslike":4,"uv_index":3,"visibility":10,"is_day":"yes"}}
```

——— HTTP Requests

HTTP clients:
```
npm request          #stare, nie rozwijane
npm postman-request  #rozwijane

npm init -y          #init npm, with yes for all questions
```
— City name to GEO locations
```
https://www.mapbox.com/
```
Mapbox API
-> Geocoding service (forward geocoding)

```
GET /geocoding/v5/{endpoint}/{search text}
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN
```
// Sample request (for GEO location of given city name)
```
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvbmlhMjAyMSIsImEiOiJja3VpNDdwYnIwNjk3MndwZXIzeGN5MGZiIn0.AQ89_QoaFbEcMliXUAUGvQ
```

Date: 2021/2022
