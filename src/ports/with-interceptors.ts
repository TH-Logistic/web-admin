import { AxiosInstance } from "axios";
import { ApiError } from "../errors/ApiError";
import { camelizeKeys } from "humps";
import useAuth from "../hooks/use-auth";

const withInterceptors = (client: AxiosInstance): AxiosInstance => {
    client.interceptors.request.use((config) => {
        const { token } = useAuth();
        const headers = config.headers;

        headers['Authorization'] = token ? `Bearer ${token}` : null

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
            console.log(response)
            return Promise.reject(new ApiError(response.status, response.data.message))
        }
    })

    return client
}

export default withInterceptors;