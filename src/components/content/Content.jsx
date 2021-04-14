import React, {useEffect, useState} from "react"
import ContentDataC from "./ContentData/ContentDataC";
import ContentDataF from "./ContentData/ContentDataF";
import {connect} from "react-redux";
import {getWeatherData, setCMode} from "../../redux/content_reducer";

const s = require("./Content.module.css");

const Content = ({temp, cMode}) => {

    return <div className={s.content}>
        <div className={s.container}>
            <div className={s.content__wrap}>
                {cMode
                    ? <ContentDataC temp={temp}/>
                    : <ContentDataF temp={temp}/>}
            </div>
        </div>
    </div>
}

let MapStateToProps = (state) => {
    return {
        temp: state.content.main.temp,
        cMode: state.content.cMode
    }
}

export default connect(MapStateToProps, {getWeatherData})(Content)

