import React, {useEffect, useState} from "react"
import SearchingDataForm from "../searching/SearchingDataForm";
import SearchingData from "../searching/SearchingData";
import {getWeatherData, saveValue, setCMode} from "../../redux/content_reducer";
import {connect} from "react-redux";

const s = require("./Header.module.css")

const Header = ({name, changedMode, getWeatherData, cities, weather, city, saveCity, setNewMode}) => {
    let [citySelection, setCitySelectionMode] = useState(false)
    useEffect(() => {
        getWeatherData(city)
        debugger
    }, [city])

    const saveChanges = () => {
        setCitySelectionMode(false)
    }

    return <header>
        <div className={s.container}>
            <div className={s.header__wrap}>
                <div className={s.header__location}>
                    {citySelection
                        ? <SearchingDataForm cities={cities}
                                             saveCity={saveCity}
                                             city={city}
                                             weather={weather}
                                             goToCitySelectionMode={saveChanges}/>
                        : <SearchingData name={name}
                                         city={city}
                                         goToCitySelectionMode={() => {
                                             setCitySelectionMode(true)
                                         }}/>}
                    <div className={s.header__degreesButtons}>
                        <span className={s.degreesButton__dot}>°</span>
                        {changedMode ? <div className={s.degreesButton__wrap}>
                                        <button className={s.degreesButton__cButton + " " + s.focused} onClick={() => {setNewMode(true)}}>C
                                        </button>
                                        <button className={s.degreesButton__fButton} onClick={() => {setNewMode(false)
                                            debugger}}>F
                                        </button>
                                        </div>
                                    : <div className={s.degreesButton__wrap}>
                                        <button className={s.degreesButton__cButton} onClick={() => {setNewMode(true)}}>C
                                        </button>
                                        <button className={s.degreesButton__fButton +  " " + s.focused} onClick={() => {setNewMode(false)
                                            debugger}}>F
                                        </button>
                                      </div>}

                    </div>
                </div>
            </div>
        </div>
    </header>
}

let MapStateToProps = (state) => {
    return {
        weather: state.content.weather,
        city: state.content.city,
        cities: state.search.cities,
        name: state.content.name,
        temp: state.content.temp,
        changedMode: state.content.cMode
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        saveCity: (newCitySelected) => {
            dispatch(saveValue(newCitySelected))
        },
        getWeatherData: (city) => {
            dispatch(getWeatherData(city))
        },
        setNewMode: (cMode) => {
            dispatch (setCMode(cMode))
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header)
