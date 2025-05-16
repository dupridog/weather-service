import { Weather } from './interfaces.js'

export const setWeatherTone = (temp: number) => {
  let tone: string = ''
  if (temp > 85) {
    tone = 'Hot'
  } else if (temp > 65 && temp <= 85) {
    tone = 'Moderate'
  } else {
    tone = 'Cold'
  }
  return tone
}

export const getCurrentConditions = (currentConditions: Weather[]) => {
  const conditions = []
  for (const condition of currentConditions) {
    conditions.push({
      currently: condition.main,
      description: condition.description,
    })
  }
  return conditions
}
