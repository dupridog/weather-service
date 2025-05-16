import request from 'supertest'
import { app, appInit } from './server.js'
import { describe, it, suite, beforeEach } from 'vitest'

suite('weatherController', () => {
  describe('GET /api/weather/lat/:latitude/long:longitude', () => {
    beforeEach(async () => {
      await Promise.resolve(appInit)
    })
    it('should start the app', async () => {
      return request(app)
        .get('/')
        .expect(200)
        .expect({ message: 'API is ready.', success: true })
    })
  })
})
