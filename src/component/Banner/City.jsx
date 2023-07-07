import React, { useContext } from 'react';
import { CityContext } from '../../contexts/CityContext';
import style from './Banner.module.scss';


const City = () => {
    const [city] = useContext(CityContext);
    const { cityName, data } = city;
    return(
        <div className={style.city}>
            <p>{data ? cityName : ''}<span className={style.underline}></span></p>
        </div>
    )
};

export default City;