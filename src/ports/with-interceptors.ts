import { Axios, AxiosError, AxiosInstance, HttpStatusCode } from "axios";
import { ApiError } from "../errors/ApiError";
import { camelizeKeys } from "humps";
import useAuth from "../hooks/use-auth";

const withInterceptors = (client: AxiosInstance): Axios => {
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
    }, (error) => {
        if (error instanceof AxiosError) {
            if (error.response?.status === HttpStatusCode.Unauthorized) {
                const { removeAuth } = useAuth();
                removeAuth()
            }
            return Promise.reject(new ApiError(error?.response?.status ?? 500, error?.response?.data?.message))
        } else {
            return Promise.reject(new ApiError(error?.status ?? 500, 'Internal exception! Sorry for this inconvenience'))
        }
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