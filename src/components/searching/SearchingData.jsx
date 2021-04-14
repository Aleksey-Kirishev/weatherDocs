import React from "react";
import {getWeatherData} from "../../redux/content_reducer";
import icon from "../../assets/cursor.svg"
import {connect} from "react-redux";

const s = require("./SearchingData.module.css")

function SearchingData(props) {
    return <div className={s.header__searching}>
        <div className={s.searching__city}>
            {props.name}
        </div>
        <div className={s.searching__buttons}>
            <button className={s.searching__firstButton} onClick={props.goToCitySelectionMode}>Сменить город</button>
            <button className={s.searching__secondButton} onClick={() => {
                props.getWeatherData("Krasnodar")
            }}><img className={s.searching__img} src={icon}/><span>Моё местоположение</span>
            </button>
        </div>
    </div>

}

const MapStateToProps = (state) => {
    return {
        city: state.content.city,
        name: state.content.name
    }
}

export default connect(MapStateToProps, {getWeatherData})(SearchingData)