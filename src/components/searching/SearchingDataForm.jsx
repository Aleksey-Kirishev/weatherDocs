import React from "react";
import {reduxForm} from "redux-form";
import 'antd/dist/antd.css';
import CitySelect from "../CitySelect";

const s = require("./SearchingData.module.css")

const SearchingDataForm = ({cities, saveCity, weather, goToCitySelectionMode, city}) => {

    return <form className={s.form}>
        <CitySelect cities={cities} saveCity={saveCity} city={city} weather={weather}/>
        <button className={s.form__buttonOk} onClick={goToCitySelectionMode}>OK</button>
    </form>
}

const SearchingDataReduxForm = reduxForm({form: 'edit-settings'})(SearchingDataForm)

export default SearchingDataReduxForm;