import * as axios from "axios";

const ApiKey = "eec2ffbbadb66ea910b3f122d22f5700"

//export const instance = axios.create({
  //  withCredentials: true,
//});

//export const weatherDataAPI = {
  //  getWeather (city) {
    //    return instance.get(`http://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=${ApiKey}`, {withCredentials:true})
      //      .then(response => response.weather)
    //}
//}
export const weatherDataAPI = {
    getWeatherData (city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=${ApiKey}` + `&lang=ru`)
            .then(response => response.json()).then(data => data)
    }
}
