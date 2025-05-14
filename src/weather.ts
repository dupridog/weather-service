import got from 'got'
import { API_KEY, WEATHER_URL } from './constants'
import { WeatherDataResponse } from './interfaces'
import { getAlerts } from './alerts'

export const getWeather = async (lat: Number, lon: Number): Promise<WeatherDataResponse> => {
    const url = `${WEATHER_URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${API_KEY}`
    const response = await got.get(url)
    const weatherData: WeatherDataResponse = JSON.parse(response.body)

    return weatherData
}



export const displayData = (weatherData: WeatherDataResponse) => {
    /*
        should return what the weather condition is outside in that area (snow, rain,etc), 
        whether it’s hot, cold, or moderate outside (use your own discretion on what temperature equates to each type), 
        and whether there are any weather alerts going on in that area, 
        with what is going on if there
        is currently an active alert.
    */
    const html = 
    `<h3>Weather for ${weatherData.lon} - ${weatherData.lat}</h3><br />
    <strong>Current Weather:</strong> ${weatherData.current.weather[0].description}<br />
    <img src=\"https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png\" ><br />
    <strong>Current Temperature:</strong> ${weatherData.current.temp}<br /><br />
    <strong>Current Alerts:</strong> ${getAlerts(weatherData.alerts)}<br />`
    return html
}
