import fetch from 'node-fetch'

import { ODATA_USER, ODATA_PASS, ODATA_PATH } from './env-config.js'

const incidents = []

export async function getAllDocuments() {
    let url = `http://${ODATA_PATH}Document_Заявка?$format=json&$expand=Регион,Заказчик`
    let buf = Buffer.from(`${ODATA_USER}:${ODATA_PASS}`)
    let result = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Authorization': 'Basic ' + buf.toString('base64')
        }})
        console.log(result.status)
    let res = null
    console.log(`users ответ: ${result.status}`)
    if (result.status === 200) {
        res = await result.json()
        res.value.forEach(element => {
            incidents.push(
                {
                    id: element.Ref_Key,
                    number: element.Number,
                    date: Date.parse(element.Date),
                    createDate: Date.parse(element.ДатаСоздания),
                    title: element.Тема,
                    message: element.ТекстСообщения,
                    decription: element.ПолноеОписание,
                    region: {
                        id: element.Регион_Key,
                        description: element.Регион !== null ? element.Регион.Description : ''
                    },
                    channel: element.КаналОбращения,
                    priority: element.Приоритет,
                    type: element.Тип,
                    customer: {
                        id: element.Заказчик_Key,
                        name: element.Заказчик !== null ? element.Заказчик.Description : ''
                    }
                }
            )
        })
    } 
    return incidents
}