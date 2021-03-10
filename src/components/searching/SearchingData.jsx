import React from "react";
import {getWeatherData} from "../../redux/content_reducer";
import s from "../header/Header.module.css";
import {connect} from "react-redux";

class SearchingData extends React.Component {

    componentDidMount() {
        let city = this.props.city;
        let name = this.props.name;
        if (!city || !name) {city = "Krasnodar"}
        this.props.getWeatherData(city)
    }

    render() {
        return <div className={s.city}>
            <span>{this.props.name}</span>
            <div className={s.buttons}>
                <button className={s.firstButton} onClick={this.props.goToCitySelectionMode}>Сменить город</button>
                <button className={s.secondButton} onClick={ () => {this.props.getWeatherData("Krasnodar")}}>Моё местоположение</button>
            </div>
        </div>

    }
}

const MapStateToProps = (state) => {
   return {
        city:state.content.city,
        name: state.content.name
   }
}

export default connect (MapStateToProps, {getWeatherData})(SearchingData)