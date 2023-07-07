import React, { useContext, useEffect } from 'react';
import FutureSet from './FutureSet';
import style from './Future.module.scss';
import { CityContext } from '../../contexts/CityContext';
const getFutureWeather = require('../../api/model/getForecast');

const Future = () => {
    const [city, setCity] = useContext(CityContext);
    const { cityName, isFutureLoaded, futureData } = city;

    useEffect(() => {
        if (!isFutureLoaded) {
            getFutureWeather(cityName).then((res) => {
                let data = [];
                for (let i = 0; i < 5; i ++) {
                    const dayData = res[i];
                    data.push({
                        day: new Date(dayData.date).getDay(),
                        weather: dayData.weather,
                        temp: dayData.temp,
                    });
                }
                setCity({
                    ...city,
                    futureData: data,
                    isFutureLoaded: true,
                });
            });
        }
    });

    return (
        !isFutureLoaded ? (<div>Loading</div>) : (
            <div className={style.future}>
                {futureData.map((item) => {
                    return(
                        <FutureSet key={item.day} temp={Math.round(item.temp)} weather={item.weather}>{item.day}</FutureSet>
                    )
                })}
            </div>    
        )
    )
}

export default Future;