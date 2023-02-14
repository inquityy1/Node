const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=975a64c1a6b2109d958bd091fe426631&query=37.8267,-122.4233&units=f';

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' fahrenheit out. there is a ' + response.body.current.precip +'% chance of rain');
});