const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=975a64c1a6b2109d958bd091fe426631&query=' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
            console.log(url);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' fahrenheit out. there is a ' + response.body.current.precip +'% chance of rain');
        };
    });
};

module.exports = forecast;
