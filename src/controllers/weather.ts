import got from 'got'
import { HttpError } from 'http-errors'
import { Request, Response } from 'express'
import { API_KEY, WEATHER_URL } from '../lib/constants.js'
import { getCurrentConditions, setWeatherTone } from '../lib/weather.js'
import { getAlerts } from '../lib/alerts.js'
import { WeatherDataResponse, WeatherResponse } from '../lib/interfaces.js'

export const getWeatherData = async (
  lat: string,
  lon: string,
): Promise<WeatherDataResponse | HttpError> => {
  try {
    const url = `${WEATHER_URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${API_KEY}`
    const response = await got.get(url)
    const weatherData: WeatherDataResponse = JSON.parse(response.body)

    return weatherData
  } catch (err: any) {
    err.statusCode = 404
    err.message = 'Location cannot be found, please check your coordinates'
    throw err
  }
}

export const getWeather = async (req: Request, res: Response) => {
  const { latitude, longitude } = req.params
  const weatherData = await getWeatherData(latitude, longitude)
  const currentConditions = getCurrentConditions(weatherData.current.weather)
  const activeAlerts = getAlerts(weatherData.alerts)
  const howItFeelsOutside = setWeatherTone(weatherData.current.temp)

  const weatherResponse: WeatherResponse = {
    currentConditions,
    howItFeelsOutside,
    activeAlerts,
  }

  res.setHeader('Content-Type', 'application/json')
  res.json(weatherResponse)
}
