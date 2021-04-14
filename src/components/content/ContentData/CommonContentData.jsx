import React from "react"
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";
import Weather from "../Weather/Weather";

function CommonContentData(props) {
    return <React.Fragment>
        {props.weather.map(m => <Weather item={m} key={m.id} temperatura={props.temperatura}/>)}
    </React.Fragment>
}

let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        wind: state.content.wind,
        city: state.content.city,
        weather: state.content.weather
    }
}

export default connect(MapStateToProps, {getWeatherData})(CommonContentData)