import {
  type WeatherDataResponse,
  type WeatherResponse,
} from '../src/lib/interfaces.js'

export const mockWeatherResponse: WeatherDataResponse = {
  lat: 46.8901,
  lon: -98.6881,
  timezone: 'America/Chicago',
  timezone_offset: -18000,
  current: {
    dt: 1747346430,
    sunrise: 1747306767,
    sunset: 1747360977,
    temp: 290.47,
    feels_like: 290.11,
    pressure: 978,
    humidity: 71,
    dew_point: 285.17,
    uvi: 2.47,
    clouds: 92,
    visibility: 9630,
    wind_speed: 1.69,
    wind_deg: 69,
    wind_gust: 7.51,
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
  },
  alerts: [
    {
      sender_name: 'NWS Bismarck ND',
      event: 'Heavy Rainfall',
      start: 1747250220,
      end: 1747380600,
      description: "It\'s gonna rain!",
      tags: ['Other dangers'],
    },
    {
      sender_name: 'NWS Bismarck ND',
      event: 'Wind Advisory',
      start: 1747375200,
      end: 1747440000,
      description: "It\'s too windy to wear a hat",
      tags: ['Wind'],
    },
  ],
}

export const mockWeatherServiceResponse: WeatherResponse = {
  currentConditions: [
    {
      currently: 'Clouds',
      description: 'broken clouds',
    },
  ],
  howItFeelsOutside: 'Cold',
  activeAlerts: [
    {
      event: 'Heavy Rainfall',
      description: "It\'s gonna rain!",
    },
    {
      event: 'Wind Advisory',
      description: "It\'s too windy to wear a hat",
    },
  ],
}
