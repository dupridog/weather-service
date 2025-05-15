import express, { Request, Response } from 'express'
import router from './router.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use('/api', express.json(), router)



app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is ready.",
  })
})

// // app.get('/ui/weather/lat/:latitude/long/:longitude', async (req, res) => {
// //   const latitude = parseFloat(req.params.latitude)
// //   const longitude = parseFloat(req.params.longitude)

// //   const weatherData = await getWeatherData(latitude, longitude)
// //   const html = displayData(weatherData)

// //   res.send(html)
// // })

// // app.get('/api/weather/lat/:latitude/long/:longitude', async (req, res) => {
// //   const latitude = parseFloat(req.params.latitude)
// //   const longitude = parseFloat(req.params.longitude)

// //   const weatherData = await getWeather(latitude, longitude)
  
// //   const currentConditions = getCurrentConditions(weatherData.current.weather)
// //   const activeAlerts = getAlerts(weatherData.alerts)
// //   const howItFeelsOutside = setWeatherTone(weatherData.current.temp)

// //   res.setHeader('Content-Type', 'application/json');
// //   res.json({
// //     currentConditions,
// //     howItFeelsOutside,
// //     activeAlerts
// //   })
// // })

app.listen(PORT, () => {
  console.log(`API is up and listening on PORT ${PORT}`);
})

 