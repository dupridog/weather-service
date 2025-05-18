# Weather-Service

Express.js HTTP Server that uses the Open Weather [One Call API 3.0](https://openweathermap.org/api/one-call-3) to retrieve weather data based upon a location's coordinates.

## Building & Running Service

To build a deployable service, run `npm run build`. Files are output to the `./dist` folder.

For development : To run the service locally, run `npm run dev`. The service will restart upon file changes.

To build and run the service, run `npm run start`. This builds the service, and then runs the service.

## Tests

To run tests, run `npm run test`. Tests use the [Vitest](https://vitest.dev/) testing framework. <br />
For coverage, run `npm run coverage`.

# Endpoints

This endpoint allows you to get specific data about the weather in your location. <br /><br />
[`/api/weather/lat/:latitude/long/:longitude`](#get-apiweatherlatlatitudelonglongitude)<br />

### GET /api/weather/lat/:latitude/long/:longitude

Get current weather information for a given latitude and longitude.

**Parameters**

|    Name     | Required |  Type  |                                 Description                                 |
| :---------: | :------: | :----: | :-------------------------------------------------------------------------: |
| `latitude`  | required | string | The latitude of the location for which you want query weather information.  |
| `longitude` | required | string | The longitude of the location for which you want query weather information. |

**Response**

```
{
  "currentConditions": [
    {
      "currently": "Rain",
      "description": "heavy intensity rain"
    }
  ],
  "howItFeelsOutside": "Cold",
  "activeAlerts": [
    {
      "event": "Flash Flooding"
      "description": "Up to 12 inches of rain expected for the SoggyBottoms area"
    }
  ]
}
```

**Errors**

| StatusCode |                         Message                         |                            Description                            |
| :--------: | :-----------------------------------------------------: | :---------------------------------------------------------------: |
|    404     | Location cannot be found, please check your coordinates | Either the latitude, longitude, or both are not able to be found. |
