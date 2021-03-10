import React from "react"
import {Component} from "react";
import {connect} from "react-redux";
import "./Header.module.css"
import Header from "./Header";
import {saveValue} from "../../redux/content_reducer";

class HeaderContainer extends Component {
    render() {
        return <header>
            <Header name={this.props.name} cities={this.props.cities} weather={this.props.weather} city={this.props.city} saveCity={this.props.saveCity} />
        </header>
    }
}

let MapStateToProps = (state) => {
    return {
        weather: state.content.weather,
        city: state.content.city,
        cities: state.search.cities,
        name: state.content.name
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        saveCity: (newCitySelected) => {
            dispatch (saveValue(newCitySelected))
        }
    }
}

export default connect (MapStateToProps,MapDispatchToProps)(HeaderContainer)

