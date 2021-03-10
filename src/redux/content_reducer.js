import {weatherDataAPI} from "../api/api";
const MAIN_REQUEST = "MAIN_REQUEST"
const WEATHER_REQUEST = "WEATHER_REQUEST"
const WIND_REQUEST = "WIND_REQUEST"
const SAVE_VALUE ="SAVE_VALUE"
const NAME_REQUEST ="NAME_REQUEST"
const VISIBILITY_REQUEST ="VISIBILITY_REQUEST"
const ICON_REQUEST = "ICON_REQUEST"

let initialState = {
    main: {
        temp: null,
        humidity: null,
        pressure: null,
        feels_like: null
    },
    weather:[{
        id: null,
        main: "",
        description: "",
        icon: ""
    }],
    wind: {
        speed:null
    },
    newIcon: null,
    visibility: null,
    city: "",
    newCitySelected: "",
    name: ""
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAIN_REQUEST:
            return {...state, main: action.main}
        case WEATHER_REQUEST:
            return {...state, weather: action.weather}
        case WIND_REQUEST:
            return {...state, wind: action.wind}
        case NAME_REQUEST :
            return {...state, name: action.name}
        case ICON_REQUEST :
            let body = action.newIcon
            return {...state, weather:[...state.weather, {icon:body}]}
        case VISIBILITY_REQUEST :
            return {...state, visibility: action.visibility}
        case SAVE_VALUE:{
            let body = action.newCitySelected
            return {
                ...state,
                city: body,
                newCitySelected: " "}
        }
        default :
            return state

    }
}
export default contentReducer

//AC
export const saveValue = (newCitySelected) => ({type:SAVE_VALUE, newCitySelected})
export const setMain = (main) => ({type:MAIN_REQUEST, main})
export const setWeather = (weather) => ({type:WEATHER_REQUEST, weather})
export const setWind = (wind) => ({type:WIND_REQUEST, wind})
export const setName = (name) => ({type:NAME_REQUEST, name})
export const setIcon = (newIcon) => ({type:ICON_REQUEST, newIcon})
export const setVisibility = (visibility) => ({type:VISIBILITY_REQUEST, visibility})

//ThunkC
export const getWeatherData = (city) => async (dispatch) => {
    let response = await weatherDataAPI.getWeatherData(city)
    dispatch(setMain(response.main))
    dispatch(setWeather(response.weather))
    dispatch(setWind(response.wind))
    dispatch(setName(response.name))
    dispatch(setVisibility(response.visibility))
}
export const getIcon = (newIcon) => async (dispatch) => {
    let response = await weatherDataAPI.getIcon(newIcon)
    debugger
    dispatch(setIcon(response))
}

