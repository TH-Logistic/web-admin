import axios from "axios"
import { ApiError } from "../errors/ApiError"
import { ACCESS_TOKEN } from "./local-storage-key"

axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const headers = config.headers;
    headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : null

    return ({
        ...config,
        headers: headers
    })
})

axios.interceptors.response.use((response) => {
    if (response.data.success === true) {
        console.log(response.data.data)
        return response.data.data
    } else {
        return Promise.reject(new ApiError(response.status, response.data.message))
    }
})

const productClient = axios.create({
    baseURL: process.env.REACT_APP_PRODUCT_URL + '/api/v1',
})

const transportationClient = axios.create({
    baseURL: process.env.REACT_APP_TRANSPORTATION_URL + '/api/v1',
})

export { productClient, transportationClient }