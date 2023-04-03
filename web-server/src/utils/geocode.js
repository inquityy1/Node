const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCjhIjoiY2pzbml20G92MGN2MTQ0cGd3bjVheTFuayJ9.hbZJE6qEZHEsL5QXVF4vtw&limit=1';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.current.weather_descriptions[0],
                longitude: body.current.temperature,
                location: body.features[0].place_name,
            });
        };
    });
};

module.exports = geocode;
