import express from 'express'
import { getWeather } from './controllers/weather.js'

const router = express.Router()

router.get('/weather/lat/:latitude/long/:longitude', getWeather)

export default router
