import React from "react"
import s from "../Content.module.css";
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";

class CommonContentData extends React.Component {

    componentDidMount() {
        if ((!this.props.temperatura) || (!this.props.weatherIcon) || (!this.props.weatherDescription)) {
            let city = this.props.city;
            if (!city) {city = "Krasnodar"}
            this.props.getWeatherData(city)
        }
    }

    render() {
        return <span className={s.main}>
                <span className={s.temperatura}>
                    {this.props.temperatura}
                </span>
        </span>
    }
}

let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        wind: state.content.wind,
        city: state.content.city
    }
}

export default connect (MapStateToProps, {getWeatherData})(CommonContentData)