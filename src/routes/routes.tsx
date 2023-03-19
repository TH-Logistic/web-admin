import { JsxElement } from "typescript";
import App from "../App";
import AuthFrame from "../components/AuthFrame/AuthFrame";
import AuthPage from "../pages/AuthPage/AuthPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ErrorPage from "../pages/error/Error";
import OrderPage from "../pages/OrderPage/OrderPage";

export type Route = {
    [key: string]: {
        element: any,
        path: string
    }
}

export const ROUTES: Route = {
    AUTH: {
        element: <AuthFrame child={<AuthPage />} />,
        path: '/auth'
    },
    FORGOT_PASSWORD: {
        element: <AuthFrame child={<ForgotPasswordPage />} />,
        path: '/forgot-password'
    },
    ERROR: {
        path: "*",
        element: <ErrorPage />,
    },
    ORDERS: {
        path: "/orders",
        element: <OrderPage />
    }
}