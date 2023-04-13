import axios from "axios"

const productClient = axios.create({
    baseURL: process.env.PRODUCT_URL,
    url: '/api/v1',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
    },
})

const transportationClient = axios.create({
    baseURL: process.env.TRANSPORTATION_URL,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
    },
})
export { productClient, transportationClient }