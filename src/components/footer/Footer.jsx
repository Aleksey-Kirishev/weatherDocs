import React from "react"
import s from "./Footer.module.css"

const Footer = ({wind, main, visibility}) => {
    return <div className={s.footer}>
        <div className={s.wind}>
            ВЕТЕР
            <div className={s.dannie}>
                {wind.speed} м/с
            </div>
        </div>
        <div className={s.pressure}>
            ДАВЛЕНИЕ
            <div className={s.dannie}>
                {main.pressure} мм рт.ст.
            </div>
        </div>
        <div className={s.humidity}>
            ВЛАЖНОСТЬ
            <div className={s.dannie}>
                {main.humidity} %
            </div>
        </div>
        <div className={s.visibility}>
            ВИДИМОСТЬ
            <div className={s.dannie}>
                {visibility/1000} км
            </div>
        </div>
    </div>
}

export default Footer;
