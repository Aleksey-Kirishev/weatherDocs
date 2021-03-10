import React from "react"
import {Select} from "antd";
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {getWeatherData} from "../redux/content_reducer";
const {Option} = Select;

class CitySelect extends React.Component{


    componentDidMount() {
        let city = this.props.city;
        if (!city) {city = "Krasnodar"}
        this.props.getWeatherData(city)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.city !== this.props.city) {
            this.props.getWeatherData(this.props.city)
        }
    }

    render() {
        let saveNewCity = (values) => {
            debugger
            this.props.saveCity(values)
        }

        return <div>
            <Select
                showSearch
                style={{ width: 200 }}
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
                {this.props.cities.map((item=>(
                <Option key={item.id} value={item.value}>{item.value}</Option>
            )))}

            </Select>
        </div>

    }
}

let MapStateToProps = (state) => {
    return {
        weather: state.content.weather,
        city: state.content.city
    }
}

export default connect (MapStateToProps, {getWeatherData})(CitySelect)

