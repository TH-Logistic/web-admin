import axios, { AxiosInstance } from "axios";
import withInterceptors from "./with-interceptors";
import { within } from "@testing-library/react";

const productClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_PRODUCT_URL + '/api/v1',
    })
);

const transportationClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_TRANSPORTATION_URL + '/api/v1',
    })
);

const routeClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_ROUTE_URL + '/api/v1',
    })
);

const organizationClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_ORGARNIZATION_URL + '/api/v1',
    })
);

const staffClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_USER_URL + '/api',
    })
)

const authClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_AUTH_URL,
    })
)

export {
    productClient,
    transportationClient,
    organizationClient,
    routeClient,
    staffClient,
    authClient,
}