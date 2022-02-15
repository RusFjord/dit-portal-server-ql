import fetch from 'node-fetch'

import { ODATA_USER, ODATA_PASS, ODATA_PATH } from './env-config.js'

const users = []

export async function getAllUsers() {
    let url = `http://${ODATA_PATH}Catalog_ПользователиИС?$format=json&$select=Description,ПарольПортала,РольПортала`
    let buf = Buffer.from(`${ODATA_USER}:${ODATA_PASS}`)
    let result = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Authorization': 'Basic ' + buf.toString('base64')
        }})
        console.log(result.status)
    let res = null
    if (result.status === 200) {
        res = await result.json()
        res.value.forEach(element => {
            users.push(
                {
                    name: element.Description,
                    token: ''
                }
            )
        })
    } 
    return users
}