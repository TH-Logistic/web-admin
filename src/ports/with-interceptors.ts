import { AxiosInstance } from "axios";
import { ACCESS_TOKEN } from "./local-storage-key";
import { ApiError } from "../errors/ApiError";
import { camelizeKeys } from "humps";

const withInterceptors = (client: AxiosInstance): AxiosInstance => {
    client.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        const headers = config.headers;

        headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : null

        return ({
            ...config,
            headers: headers
        })
    })

    client.interceptors.response.use((response) => {
        if (
            response.data &&
            response.headers['content-type'] === 'application/json'
        ) {
            response.data = camelizeKeys(response.data);
        }

        return response
    })

    client.interceptors.response.use((response) => {
        if (response.data.success === true) {
            return response.data
        } else {
            return Promise.reject(new ApiError(response.status, response.data.message))
        }
    })

    return client
}

export default withInterceptors;