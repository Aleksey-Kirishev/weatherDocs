import React from "react"
import CommonContentData from "./CommonContentData";
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";

function ContentDataC(props) {
    const temperaturaCelcium = Math.ceil(props.temp - 273.15);

    return <CommonContentData temperatura={temperaturaCelcium}
                           goToSetCMode={props.goToSetCMode}/>
}

let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        weather: state.content.weather
    }
}

export default connect(MapStateToProps, {getWeatherData})(ContentDataC)
