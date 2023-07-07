import React from 'react';
import Temp from './Temp';

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FIR", "SAT"];
const WEATHER = {
    Thunderstorm: "11d",
    Drizzle: "09d",
    Rain: "10d",
    Snow: "13d",
    Atmosphere: "50d",
    Clear: "01d",
    Clouds: "02d",
}

const FutureSet = (props) => (
    <div>
        <Temp temp={props.temp}></Temp>
        <img src={`https://openweathermap.org/img/wn/${WEATHER[props.weather]}@2x.png`} alt="weather"/>
        <p>{DAY[props.children]}</p>
    </div>
);

export default FutureSet;
