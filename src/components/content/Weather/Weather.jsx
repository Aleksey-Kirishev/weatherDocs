import React from "react";
import s from "../Content.module.css"
const Weather = ({item}) => {
    const iconQ = `http://openweathermap.org/img/wn/${item.icon}@2x.png`
    if (item.icon === "") {
        item.icon = "02d"
    }
    return <div>
        <span className={s.temperatura}>
            <img src={iconQ}  alt={item.icon}/>
        </span>

        <span className={s.temperatura}>
            {item.description}
        </span>
    </div>
}
export default Weather