import React, {useEffect} from "react"
import {Select} from "antd";
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {getWeatherData} from "../redux/content_reducer";

const s = require("./CitySelect.module.css")
const {Option} = Select;

function CitySelect(props) {

    let saveNewCity = (values) => {
        props.saveCity(values)
    }

    useEffect(() => {
        props.getWeatherData(props.city)
    }, [props.city])

    return <div className={s.form__selector}>
        <Select
            showSearch
            style={{width: 200}}
            placeholder="Search to Select"
            onChange={saveNewCity}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
        >
            {props.cities.map((item => (
                <Option key={item.id} value={item.value}>{item.value}</Option>
            )))}

        </Select>
    </div>

}

let MapStateToProps = (state) => {
    return {
        weather: state.content.weather,
        city: state.content.city
    }
}

export default connect(MapStateToProps, {getWeatherData})(CitySelect)
