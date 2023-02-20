const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=975a64c1a6b2109d958bd091fe426631&query=37.8267,-122.4233&units=f';

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' fahrenheit out. there is a ' + response.body.current.precip +'% chance of rain');
//     }
// });

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCjhIjoiY2pzbml20G92MGN2MTQ0cGd3bjVheTFuayJ9.hbZJE6qEZHEsL5QXVF4vtw&limit=1';

// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('No matching resaults');
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// });

geocode('New York', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});