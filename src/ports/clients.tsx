import axios, { AxiosInstance } from "axios";
import withInterceptors from "./with-interceptors";

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

export { productClient, transportationClient, routeClient }