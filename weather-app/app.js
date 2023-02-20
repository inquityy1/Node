const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

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

// geocode('New York', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(37.8267,-122.4233, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
