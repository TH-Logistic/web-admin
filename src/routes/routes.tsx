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
import LocationPage from "../pages/LocationPage/LocationPage";
import { ReactNode } from "react";

export type Route = {
    element: ReactNode,
    path: string,
    subroutes?: { [key: string]: Route },
}

export const ROUTES: {
    [key: string]: Route
} = {
    AUTH: {
        element: <AuthLayout />,
        path: '/auth',
        subroutes: {
            LOGIN: {
                element: <AuthPage />,
                path: 'login'
            },

            FOTGOT_PASSWORD: {
                element: <ForgotPasswordPage />,
                path: 'forgot-password'
            }
        }
    },

    HOME: {
        element: <BaseLayout />,
        path: '/',
        subroutes: {
            ORDERS: {
                path: "/orders",
                element: <OrderPage />
            },
            PRODUCTS: {
                path: "/products",
                element: <ProductPage />
            },
            ROUTES: {
                path: "/routes",
                element: <RoutePage />
            },
            LOCATIONS: {
                path: "/locations",
                element: <LocationPage />,
            },
            DELIVERY: {
                path: '/locations/delivery',
                element: <LocationPage />
            },
            GARAGE: {
                path: '/locations/garage',
                element: <LocationPage />
            },
            TRUCKS: {
                path: "/trucks",
                element: <OrderPage />
            },
            CUSTOMERS: {
                path: "/customers",
                element: <OrderPage />
            },
            DRIVERS: {
                path: "/drivers",
                element: <OrderPage />
            },

        }
    },
    ERROR: {
        path: "*",
        element: <ErrorPage />,
    },

}