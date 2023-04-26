import { JsxElement } from "typescript";
import App from "../App";
import AuthLayout from "../components/AuthFrame/AuthLayout";
import AuthPage from "../pages/AuthPage/AuthPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ErrorPage from "../pages/Error/Error";
import OrderPage from "../pages/OrderPage/OrderPage";
import withBaseLayout from "../components/BaseLayout/BaseLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import RoutePage from "../pages/RoutePage/RoutePage";
import LocationPage from "../pages/LocationPage/LocationPage";
import { ReactNode } from "react";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import GaragePage from "../pages/GaragePage/GaragePage";
import TransportationPage from "../pages/TransportationPage/TransportationPage";
import OrganizationPage from "../pages/OrganizationPage/OrganizationPage";
import CreateProductPage from "../pages/CreateProductPage/CreateProductPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import CreateRoutePage from "../pages/CreateRoutePage/CreateRoutePage";
import StaffPage from "../pages/StaffPage/StaffPage";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import DriverPage from "../pages/DriverPage/DriverPage";
import StaffDetailPage from "../pages/StaffDetail/StaffDetailPage";

export type Route = {
  element: ReactNode,
  path: string,
  index?: boolean,
  subroutes?: { [key: string]: Route },
}

export const ROUTES: {
  [key: string]: Route
} = {
  AUTH: {
    element: <AuthLayout />,
    path: '/auth',
    subroutes: {
      LOGIN_INDEX: {
        element: <AuthPage />,
        path: '/auth/login',
        index: true,
      },
      LOGIN: {
        element: <AuthPage />,
        path: '/auth/login',
      },

      FOTGOT_PASSWORD: {
        element: <ForgotPasswordPage />,
        path: '/auth/forgot-password'
      }
    }
  },

  HOME: {
    element: <BaseLayout />,
    path: '/',
    subroutes: {
      ORDERS: {
        path: "/orders",
        element: <OrderPage />,
      },
      ORDERS_INDEX: {
        path: "/orders",
        element: <OrderPage />,
        index: true,
      },
      PRODUCTS: {
        path: "/products",
        element: <ProductPage />,
      },
      ROUTES: {
        path: "/routes",
        element: <RoutePage />
      },
      CREATE_ROUTE: {
        path: '/routes/create',
        element: <CreateRoutePage />
      },
      LOCATIONS: {
        path: "/locations",
        element: <LocationPage />,
      },
      DELIVERY: {
        path: '/locations/delivery',
        element: <DeliveryPage />
      },
      GARAGE: {
        path: '/locations/garage',
        element: <GaragePage />
      },
      TRUCKS: {
        path: "/trucks",
        element: <TransportationPage />
      },
      ORGARNIZATION: {
        path: "/organizations",
        element: <OrganizationPage />
      },
      DRIVERS: {
        path: "/drivers",
        element: <DriverPage />
      },
      STAFFS: {
        path: "/staffs",
        element: <StaffPage />
      },
      CREATE_PRODUCT: {
        path: '/products/create',
        element: <CreateProductPage />
      },
      PRODUCT_DETAIL: {
        path: '/products/:productId',
        element: <ProductDetailPage />
      },
      STAFF_DETAIL: {
        path: '/staffs/:staffId',
        element: <StaffDetailPage />
      }
    }
  },
  ERROR: {
    path: "*",
    element: <ErrorPage />,
  },
}