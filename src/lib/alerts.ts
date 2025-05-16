import { Alert, AlertResponse } from './interfaces.js'

export const displayAlerts = (alerts: Array<Alert>) => {
  let alertDisplay: string = '<ul>'
  for (const alert of alerts) {
    const start = new Date(alert.start * 1000)
    const end = new Date(alert.end * 1000)
    alertDisplay += `<li>
                <h4>${alert.sender_name}</h4>
                <i>Start: ${start.toISOString().split('T')[0]} ${start.toTimeString().split(' ')[0]}</i><br />
                <i>End: ${end.toISOString().split('T')[0]} ${end.toTimeString().split(' ')[0]}</i><br /><br />
                <b>${alert.event}</b><br /><br /> 
                <b>${alert.description}</b><br />
            </li>`
  }
  alertDisplay += `</ul>`
  return alertDisplay
}

export const getAlerts = (alerts: Alert[]) =>
  alerts
    ? alerts.map((alert) => ({
        event: alert.event,
        description: alert.description,
      }))
    : 'N/A'
