import { describe, expect, it } from 'vitest'
import { getCurrentConditions, setWeatherTone } from './weather'

const currentWeatherMock = [
  {
    id: 999,
    main: 'Lava',
    description: 'The floor is Lava',
    icon: '04n',
  },
]

describe('getCurrentConditions', () => {
  it('should generate an object array with an currently and description property', () => {
    const currentConditions = getCurrentConditions(currentWeatherMock)

    expect(currentConditions).toEqual([
      {
        currently: 'Lava',
        description: 'The floor is Lava',
      },
    ])
  })
})

describe('setWeatherTone', () => {
  it('should return Hot if temp is above 85 degrees', () => {
    const weatherTone = setWeatherTone(85.1)

    expect(weatherTone).toBe('Hot')
  })

  it('should return Moderate if temp is above 65 degrees but lower than 86', () => {
    let weatherTone = setWeatherTone(66)

    expect(weatherTone).toBe('Moderate')

    weatherTone = setWeatherTone(85)

    expect(weatherTone).toBe('Moderate')
  })

  it('should return Cold if temp is 65 or below degrees', () => {
    let weatherTone = setWeatherTone(65)

    expect(weatherTone).toBe('Cold')

    weatherTone = setWeatherTone(1)

    expect(weatherTone).toBe('Cold')

    weatherTone = setWeatherTone(33)

    expect(weatherTone).toBe('Cold')
  })
})
