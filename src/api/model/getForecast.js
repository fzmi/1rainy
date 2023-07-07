const axios = require('axios');
const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

function getForecastWeather(city='Sydney') {
    return weatherApi.get('/forecast', {
        params: {
            q: `${city},AU`,
            units: "metric",
            APPID: "1d7afce7ea097626fb8d59ecc5b971c0",
        }
    }).then((res) => {
        const output = []
        for (let i = 0; i < 40; i ++) {
            if ((i + 8) % 8 !== 0) {
                continue;
            }
            const data = res.data.list[i];
            const date = data.dt_txt.slice(0, 10);
            output.push({
                date,
                weather: data.weather[0].main,
                temp: data.main.temp,
            })
        }
        return output;
    });
}

module.exports = getForecastWeather;
