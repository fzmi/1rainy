const axios = require('axios');
const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

function getCurrentWeather(city='Sydney') {
    return weatherApi.get('/weather',{
        params: {
            q: `${city},AU`,
            units: "metric",
            APPID: "1d7afce7ea097626fb8d59ecc5b971c0",
        }
    })
    .then(res => {
        const {main, wind, weather} = res.data;
        const {temp, humidity} = main;
        const output = {
            temp,
            wind: wind.speed,
            humidity,
            weather: weather[0].main,
        };
        return output;
    })
    .catch(err => {
        console.error(err); 
    })
}

module.exports = getCurrentWeather;
