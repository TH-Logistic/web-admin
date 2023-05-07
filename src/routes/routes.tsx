import AuthLayout from "../components/AuthFrame/AuthLayout";
import AuthPage from "../pages/AuthPage/AuthPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ErrorPage from "../pages/Error/Error";
import OrderPage from "../pages/OrderPage/OrderPage";
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
import CreateLocationPage from "../pages/\bCreateLocationPage/CreateLocationPage";
import CreateTransportationPage from "../pages/CreateTruckPage/CreateTransportationPage";
import CreateOrganizationPage from "../pages/CreateOrganizationPage/CreateOrganizationPage";
import CreateDriverPage from "../pages/CreateDriverPage/CreateDriverPage";
import CreateStaffPage from "../pages/CreateStaffPage/CreateStaffPage";

export type Route = {
  element: ReactNode,
  path: string,
  index?: boolean,
  subroutes?: { [key: string]: Route },
}

export type BaseRoutes = "AUTH" | "HOME" | "ERROR"
export const ROUTES: {
  [key in BaseRoutes]: Route
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
      CREATE_PRODUCT: {
        path: '/products/create/:productId',
        element: <CreateProductPage />
      },
      PRODUCT_DETAIL: {
        path: '/products/:productId',
        element: <ProductDetailPage />
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
      CREATE_DELIVERY: {
        path: "/locations/delivery/create",
        element: <CreateLocationPage />,
      },
      GARAGE: {
        path: '/locations/garage',
        element: <GaragePage />
      },
      CREATE_GARAGE: {
        path: '/locations/garage/create',
        element: <CreateLocationPage />
      },
      TRUCKS: {
        path: "/trucks",
        element: <TransportationPage />
      },
      CREATE_TRUCK: {
        path: "/trucks/create",
        element: <CreateTransportationPage />,
      },
      ORGARNIZATION: {
        path: "/organizations",
        element: <OrganizationPage />
      },
      CREATE_ORGARNIZATION: {
        path: "/organizations/create",
        element: <CreateOrganizationPage />
      },
      DRIVERS: {
        path: "/drivers",
        element: <DriverPage />
      },
      CREATE_DRIVER: {
        path: "/drivers/create",
        element: <CreateDriverPage />
      },
      STAFFS: {
        path: "/staffs",
        element: <StaffPage />
      },
      CREATE_STAFF: {
        path: "/staffs/create",
        element: <CreateStaffPage />
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