import React from "react"
import CommonContentData from "./CommonContentData";
import s from "./../Content.module.css"
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";
import Weather from "../Weather/Weather";

class ContentDataC extends React.Component {
    state = {
        temp: this.props.temp
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.temp !== this.props.temp) {
            this.setState({
                temp: this.props.temp
            })
        }
    }

    render() {
        if (!this.props.temp) {
            this.props.getWeatherData("Krasnodar")
        }
        const temperaturaCelcium = Math.ceil(this.props.temp - 273.15);

        return <div>
            <CommonContentData temperatura={temperaturaCelcium}
                               goToSetCMode={this.props.goToSetCMode}/><sup className={s.celsium}> °</sup>
        </div>
    }
}
let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        weather: state.content.weather
    }
}

export default connect (MapStateToProps, {getWeatherData}) (ContentDataC)