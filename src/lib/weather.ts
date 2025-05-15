import { Weather, WeatherDataResponse } from './interfaces.js'
import { displayAlerts, getAlerts } from './alerts.js'

export const displayData = (weatherData: WeatherDataResponse) => {
    /*
        should return what the weather condition is outside in that area (snow, rain,etc), /// current weather
        whether it’s hot, cold, or moderate outside (use your own discretion on what temperature equates to each type), //done
        and whether there are any weather alerts going on in that area, //alerts
        with what is going on if there is currently an active alert. 
    */
    const html = 
    `<h3>Weather for ${weatherData.lon} - ${weatherData.lat}</h3><br />
    <strong>Current Weather:</strong> ${weatherData.current.weather[0].description}<br />
    <img src=\"https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png\" ><br />
    <strong>Current Temperature:</strong> ${weatherData.current.temp}<br /><br />
    <strong>Current Alerts:</strong> ${displayAlerts(weatherData.alerts)}<br />`
    return html
}

export const setWeatherTone = (temp: number) => {
    let tone: string = ''
    if (temp > 85) {
        tone = 'Hot'
    } else if (temp > 65 && temp <= 85) {
        tone = 'Moderate'
    }
    else {
        tone = 'Cold'
    }
    return tone
}

export const getCurrentConditions = (currentConditions: Weather[]) => {
    const conditions = []
    for (const condition of currentConditions) {
        conditions.push({
            currently: condition.main,
            description: condition.description
        })
    }
    return conditions
}
