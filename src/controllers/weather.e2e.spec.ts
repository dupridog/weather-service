import request from 'supertest'
import nock from 'nock'
import { app, appInit } from '../server.js'
import { describe, it, suite, beforeEach, afterEach } from 'vitest'
import {
  mockWeatherResponse,
  mockWeatherServiceResponse,
} from '../../test/fixtures.js'

import { API_KEY, WEATHER_URL } from '../lib/constants.js'

const latitude = '46.8901'
const longitude = '-98.6881'

suite('weatherController', () => {
  describe('GET /api/weather/lat/:latitude/long:longitude', () => {
    beforeEach(async () => {
      await Promise.resolve(appInit)

      nock(WEATHER_URL)
        .get(
          `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily,hourly&units=imperial&appid=${API_KEY}`,
        )
        .reply(200, mockWeatherResponse)
    })
    afterEach(async () => {
      nock.cleanAll()
    })

    it('should return expected fields', async () => {
      return request(app)
        .get(`/api/weather/lat/${latitude}/long/${longitude}`)
        .expect(200)
        .expect(mockWeatherServiceResponse)
    })

    it('should throw a 404 if given an invalid lat or long', async () => {
      return request(app).get('/api/weather/lat/XXX/long/ZZZ').expect(404)
    })
  })
})
