import express, { Request, Response } from 'express'
import { getWeather, displayData } from './weather'
import { getAlerts } from './alerts'

const app = express()
const PORT = process.env.PORT || 8000

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is working fine.",
  })
})

app.get('/weather/lat/:latitude/long/:longitude', async (req, res) => {
  const latitude = parseFloat(req.params.latitude)
  const longitude = parseFloat(req.params.longitude)

  const weatherData = await getWeather(latitude, longitude)
  const html = displayData(weatherData)


  res.send(html)
})

app.listen(PORT, () => {
  console.log(`API is up and listening on PORT ${PORT}`);
})
