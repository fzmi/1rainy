import React, { useContext, useEffect } from 'react';
import style from './Banner.module.scss';
import Temp from './Temp';
import OtherInfo from './OtherInfo';
import { CityContext } from '../../contexts/CityContext';
const getCurrentWeather = require('../../api/model/getCurrent');

const WeatherInfo = () => {
    const [city, setCity] = useContext(CityContext);
    const { data, isLoaded, cityName } = city;
    useEffect(() => {
        if (!isLoaded) {
            getCurrentWeather(cityName).then(res => {
                setCity({
                    ...city,
                    data: res,
                    isLoaded: true,
                })
            });
        }
    })
    
    return(
        <div className={style.weatherInfo}>
            {!isLoaded?(<div>Loading</div>):
                (data ?
                    (
                        <div>
                            <Temp temp={Math.round(data.temp)}>{data.weather}</Temp>
                            <div className={style.infoSet}>
                                <OtherInfo value={data.humidity + " %"}>Humidity</OtherInfo>
                                <OtherInfo value={data.wind + " KM/h"}>Wind</OtherInfo>
                            </div>
                        </div>
                    ) :
                    <div className={style.warning}>The city name is incorrect, please input a valid Australia city name</div>
                )
            }
        </div>
    )
}

export default WeatherInfo;