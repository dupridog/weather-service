import nock from 'nock'
import got from 'got'
import type express from 'express'
import request from 'supertest'
import { app } from '../server.js'
import {
  describe,
  expect,
  it,
  assert,
  suite,
  beforeEach,
  vi,
  afterEach,
} from 'vitest'
import { API_KEY, WEATHER_URL } from '../lib/constants.js'
import { WeatherResponse } from '../lib/interfaces.js'
import { getWeatherData, getWeather } from './weather.js'
import {
  mockWeatherResponse,
  mockWeatherServiceResponse,
} from '../../test/fixtures.js'
import { fail } from 'assert'
import { HttpError } from 'http-errors'

const currentWeatherMock = [
  {
    id: 999,
    main: 'Lava',
    description: 'The floor is Lava',
    icon: '04n',
  },
]

const latitude = '46.8901'
const longitude = '-98.6881'

suite('weatherController', () => {
  describe('getWeatherData', () => {
    it('should return weather data', async () => {
      nock(WEATHER_URL)
        .get(
          `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=${API_KEY}`,
        )
        .reply(200, mockWeatherResponse)

      expect(await getWeatherData(latitude, longitude)).toEqual(
        mockWeatherResponse,
      )
    })

    it('should throw a 404 with a message to check coordinates if bad coordinates are entered', async () => {
      const lat = '9999999'
      const long = '-9999999'
      nock(WEATHER_URL)
        .get(
          `/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=imperial&appid=${API_KEY}`,
        )
        .reply(200, mockWeatherResponse)
      try {
        await getWeatherData(latitude, longitude)
        fail('should have thrown')
      } catch (ex) {
        expect((ex as HttpError).message).toBe(
          'Location cannot be found, please check your coordinates',
        )
        assert.equal((ex as HttpError).statusCode, 404)
      }
    })
  })
  describe('getWeather', () => {
    beforeEach(async () => {
      nock(WEATHER_URL)
        .get(
          `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=${API_KEY}`,
        )
        .reply(200, mockWeatherResponse)
    })

    it('should return json with proper fields', async () => {
      request(app)
        .get(`/weather/lat/${latitude}/long/${longitude}`)
        .expect(mockWeatherServiceResponse)
    })
  })
})
