import { Alert } from "./interfaces";


export const getAlerts = (alerts: Array<Alert>) => {
    let alertDisplay: string = '<ul>'
    for (const alert of alerts) {
        const start = new Date(alert.start)
        const end = new Date(alert.end)
        alertDisplay +=
            `<li>
                <h4>${alert.sender_name}</h4>
                <i>Start: ${start}</i><br />
                <i>End: ${end}</i><br /><br />
                <b>${alert.event}</b><br /><br /> 
                <b>${alert.description}</b><br />
            </li>`
    }
    alertDisplay += `</ul>`
    return alertDisplay
}