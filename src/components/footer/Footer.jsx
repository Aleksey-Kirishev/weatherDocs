import React from "react"
import {connect} from "react-redux";

const s = require("./Footer.module.css")

const Footer = ({wind, main}) => {
    return <div className={s.footer}>
        <div className={s.footer__wrap}>

            <div className={s.container}>
                <div className={s.footer__data_items}>
                    <div className={s.data__item}>
                        <div className={s.item__title}>
                            ВЕТЕР
                        </div>
                        <div className={s.item__body}>
                            {wind.speed} м/с
                        </div>
                    </div>
                    <div className={s.data__item}>
                        <div className={s.item__title}>
                            ДАВЛЕНИЕ
                        </div>
                        <div className={s.item__body}>
                            {main.pressure} мм рт.ст.
                        </div>
                    </div>
                    <div className={s.data__item}>
                        <div className={s.item__title}>
                            ВЛАЖНОСТЬ
                        </div>
                        <div className={s.item__body}>
                            {main.humidity} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        wind: state.content.wind
    }
}

export default connect(MapStateToProps, {})(Footer)