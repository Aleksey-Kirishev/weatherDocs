import React from "react";
import  {reduxForm} from "redux-form";
import s from "../header/Header.module.css";
import 'antd/dist/antd.css';
import CitySelect from "../CitySelect";

const SearchingDataForm =({cities, saveCity, weather, goToCitySelectionMode, city}) => {

    return <form>
            <div className={s.city}>
                <CitySelect  cities={cities} saveCity={saveCity} city={city} weather={weather}/>
            </div>
            <button className={s.buttonOk} onClick={goToCitySelectionMode}>OK</button>
    </form>
}

const SearchingDataReduxForm = reduxForm({form:'edit-settings'})(SearchingDataForm)

export default SearchingDataReduxForm;