import { type Alert } from './types.js'

export const getAlerts = (alerts: Alert[] | undefined) =>
  alerts
    ? alerts.map((alert) => ({
        event: alert.event,
        description: alert.description,
      }))
    : 'N/A'
