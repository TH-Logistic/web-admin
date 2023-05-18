import axios from "axios";
import withInterceptors from "./with-interceptors";

const productClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/product',
    })
);

const transportationClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/transportation',
    })
);

const garageClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/garage',
    })
);

const locationClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/location',
    })
);

const routeClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/route',
    })
);

const organizationClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/organization',
    })
);

const staffClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/users',
    })
)

const driverClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/users',
    })
)

const authClient = withInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/auth',
    })
)



export {
    productClient,
    transportationClient,
    organizationClient,
    locationClient,
    garageClient,
    routeClient,
    staffClient,
    driverClient,
    authClient,
}