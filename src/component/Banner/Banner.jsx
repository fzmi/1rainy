import React from 'react';
import style from './Banner.module.scss';
import WeatherInfo from './WeatherInfo';
import City from './City';
import logo from './assets/banner.png';

const Banner = () => (
    <div className={style.banner} style={{ backgroundImage: `url(${logo})` }}>
        <WeatherInfo />
        <City />
    </div>
);

export default Banner;