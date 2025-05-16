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
    dt: 1747407645,
    sunrise: 1747393097,
    sunset: 1747447451,
    temp: 44.1,
    feels_like: 35.46,
    pressure: 990,
    humidity: 86,
    dew_point: 40.19,
    uvi: 0.25,
    clouds: 100,
    visibility: 10000,
    wind_speed: 21.9,
    wind_deg: 327,
    wind_gust: 29.21,
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'broken clouds',
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
      description: `It's gonna rain!`,
      tags: ['Other dangers'],
    },
    {
      sender_name: 'NWS Bismarck ND',
      event: 'Wind Advisory',
      start: 1747375200,
      end: 1747440000,
      description: `It's too windy to wear a hat`,
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
      description: "It's gonna rain!",
    },
    {
      event: 'Wind Advisory',
      description: "It's too windy to wear a hat",
    },
  ],
}
