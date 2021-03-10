import React, {useState} from "react"
import s from "./Header.module.css"
import SearchingDataForm from "../searching/SearchingDataForm";
import {getWeatherData} from "../../redux/content_reducer";
import SearchingData from "../searching/SearchingData";


const Header = ({name, cities, weather, city, saveCity}) => {
    let [citySelection, setCitySelectionMode] = useState(false)

    const saveChanges = () => {
        setCitySelectionMode(false)
    }

    return <header>
        <div>
            {citySelection
                ? <SearchingDataForm cities={cities} saveCity={saveCity} city={city} weather={weather} goToCitySelectionMode={saveChanges}/*onSubmit={onSubmit}*//>
                : <SearchingData name={name} city={city} goToCitySelectionMode={() => {
                    setCitySelectionMode(true)
                }} />}

        </div>

    </header>
}



export default Header;

