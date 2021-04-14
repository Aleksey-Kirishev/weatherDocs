const ApiKey = "0a90f8435b6dbe50a3d66566d77691a3"

export const weatherDataAPI = {
    getWeatherData (city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=${ApiKey}` + `&lang=ru`)
            .then(response => response.json()).then(data => data)
    }
}
