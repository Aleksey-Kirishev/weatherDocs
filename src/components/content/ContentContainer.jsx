import React from "react"
import Content from "./Content";
import {connect} from "react-redux";
import {getIcon, getWeatherData} from "../../redux/content_reducer";

class ContentContainer extends React.Component {

    componentDidMount() {
        if (this.props.temp == null) {
            this.props.getWeatherData("Krasnodar")
        }
    }
    render() {
        return <>
            <Content temp={this.props.temp} weather={this.props.weather}/>
        </>
    }
}

let MapStateToProps = (state) =>{
    return {
        temp: state.content.main.temp,
        weather: state.content.weather
    }
}

export default connect(MapStateToProps, {getWeatherData, getIcon}) (ContentContainer)