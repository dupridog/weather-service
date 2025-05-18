// following types borrowed from https://gist.github.com/TheJoeFin/5d9be4cb2d5ca0136021cb9ce2a9c9e5

export type WeatherDataResponse = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: CurrentWeather
  alerts: Alert[]
}

export type CurrentWeather = {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust?: number
  rain?: rain1hr
  snow?: snow1hr
  weather: Weather[]
}

export type rain1hr = {
  '1h': number // rain volume in mm
}

export type snow1hr = {
  '1h': number // snow volume in mm
}

export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

export type Alert = {
  sender_name: string
  event: string
  start: number
  end: number
  description: string
  tags: string[]
}

// app response types

export type AlertResponse = {
  event: string
  description: string
}

export type WeatherResponse = {
  currentConditions: {
    currently: string
    description: string
  }[]
  howItFeelsOutside: string
  activeAlerts:
    | string
    | {
        event: string
        description: string
      }[]
}
