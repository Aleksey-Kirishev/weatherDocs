import React from "react"
import CommonContentData from "./CommonContentData";
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";

function ContentDataF(props) {
    const temperaturaFarengeitum = Math.ceil((props.temp - 273.15) * 9 / 5 + 32);
    return <CommonContentData temperatura={temperaturaFarengeitum}
                           goToSetCMode={props.goToSetCMode}/>
}

let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        weather: state.content.weather
    }
}


export default connect(MapStateToProps, {getWeatherData})(ContentDataF)