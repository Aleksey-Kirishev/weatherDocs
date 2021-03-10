const ApiKey = "eec2ffbbadb66ea910b3f122d22f5700"

export const weatherDataAPI = {
    getWeatherData (city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=${ApiKey}` + `&lang=ru`)
            .then(response => response.json()).then(data => data)
    }
}
