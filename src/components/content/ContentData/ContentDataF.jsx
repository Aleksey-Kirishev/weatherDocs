import React from "react"
import CommonContentData from "./CommonContentData";
import s from "./../Content.module.css"
import {connect} from "react-redux";
import {getWeatherData} from "../../../redux/content_reducer";
import Weather from "../Weather/Weather";

class ContentDataF extends React.Component {
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
        const temperaturaFarengeitum = Math.ceil((this.props.temp - 273.15) * 9 / 5 + 32);
        return <div>
            <CommonContentData temperatura={temperaturaFarengeitum}
                               goToSetCMode={this.props.goToSetCMode} /><span className={s.F}><sup className={s.farengeitum}>°</sup>F</span>
        </div>
    }
}
let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        weather: state.content.weather
    }
}


export default connect (MapStateToProps, {getWeatherData}) (ContentDataF)