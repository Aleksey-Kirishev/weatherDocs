import React from "react";

const s = require("./Weather.module.css")

const Weather = ({item, temperatura}) => {
    const iconQ = `http://openweathermap.org/img/wn/${item.icon}@2x.png`
    return <div className={s.weather__body}>
        <div className={s.weather__info}>
            <div className={s.weather__icon}>
                <img src={iconQ} alt={item.icon}/>
            </div>
            <div className={s.weather__temperatura}>
                {temperatura}°
            </div>
        </div>
        <div className={s.weather__description}>
            {item.description}
        </div>
    </div>
}
export default Weather