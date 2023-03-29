import { JsxElement } from "typescript";
import App from "../App";
import AuthLayout from "../components/AuthFrame/AuthLayout";
import AuthPage from "../pages/AuthPage/AuthPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ErrorPage from "../pages/error/Error";
import OrderPage from "../pages/OrderPage/OrderPage";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import RoutePage from "../pages/RoutePage/RoutePage";

export type Route = {
    [key: string]: {
        element: any,
        path: string
    }
}

export const ROUTES: Route = {
    AUTH: {
        element: <AuthLayout child={<AuthPage />} />,
        path: '/auth'
    },
    FORGOT_PASSWORD: {
        element: <AuthLayout child={<ForgotPasswordPage />} />,
        path: '/forgot-password'
    },
    ERROR: {
        path: "*",
        element: <ErrorPage />,
    },
    ORDERS: {
        path: "/orders",
        element: <BaseLayout content={<OrderPage />} />
    },
    PRODUCTS: {
        path: "/products",
        element: <BaseLayout content={<ProductPage />} />
    },
    ROUTES: {
        path: "/routes",
        element: <BaseLayout content={<RoutePage />} />
    },
    LOCATIONS: {
        path: "/locations",
        element: <BaseLayout content={<OrderPage />} />
    },
    TRUCKS: {
        path: "/trucks",
        element: <BaseLayout content={<OrderPage />} />
    },
    CUSTOMERS: {
        path: "/customers",
        element: <BaseLayout content={<OrderPage />} />
    },
    DRIVERS: {
        path: "/drivers",
        element: <BaseLayout content={<OrderPage />} />
    }
}