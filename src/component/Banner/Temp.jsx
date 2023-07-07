import React from 'react';
import style from './Banner.module.scss';

const Temp = (props) => (
    <div>
        <div>
            <p className={style.temp}>{props.temp} &#176;</p>
            <p className={style.condition}>{props.children}</p>
        </div>
    </div>
);

export default Temp;