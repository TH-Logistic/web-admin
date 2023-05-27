import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './stores';
import { DialogProvider } from './hooks/use-dialog';
import AuthLayout from './components/AuthFrame/AuthLayout';
import AuthPage from './pages/AuthPage/AuthPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import BaseLayout from './components/BaseLayout/BaseLayout';
import OrderPage from './pages/OrderPage/OrderPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import CreateDriverPage from './pages/CreateDriverPage/CreateDriverPage';
import CreateOrganizationPage from './pages/CreateOrganizationPage/CreateOrganizationPage';
import CreateRoutePage from './pages/CreateRoutePage/CreateRoutePage';
import CreateStaffPage from './pages/CreateStaffPage/CreateStaffPage';
import CreateTransportationPage from './pages/CreateTruckPage/CreateTransportationPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import DriverPage from './pages/DriverPage/DriverPage';
import GaragePage from './pages/GaragePage/GaragePage';
import LocationPage from './pages/LocationPage/LocationPage';
import OrganizationPage from './pages/OrganizationPage/OrganizationPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import RoutePage from './pages/RoutePage/RoutePage';
import StaffDetailPage from './pages/StaffDetail/StaffDetailPage';
import StaffPage from './pages/StaffPage/StaffPage';
import TransportationPage from './pages/TransportationPage/TransportationPage';
import CreateLocationPage from './pages/CreateLocationPage/CreateLocationPage';
import CreateGaragePage from './pages/CreateLocationPage/CreateGaragePage';
import DriverDetailPage from './pages/DriverDetailPage/DriverDetailPage';
import { DeliveryDetailPage } from './pages/DeliveryDetailPage/DeliveryDetailPage';
import { GarageDetailPage } from './pages/GarageDetailPage/GarageDetailPage';
import { elements } from 'chart.js';
import { CreateOrderPage } from './pages/CreateOrderPage/CreateOrderPage';
import { ROUTES } from './utils/routes';
import { OrderDetailPage } from './pages/OrderDetailPage/OrderDetailPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      path: ROUTES.AUTH,
      children: [
        {
          element: <AuthPage />,
          index: true,
        },
        {
          element: <ForgotPasswordPage />,
          path: ROUTES.FORGOT_PASSWORD
        }
      ]
    },
    {
      element: <BaseLayout />,
      path: ROUTES.ROOT,
      children: [
        {
          index: true,
          element: <OrderPage />
        },
        {
          path: ROUTES.ORDERS,
          element: <OrderPage />
        },
        {
          path: ROUTES.ORDER_DETAIL,
          element: <OrderDetailPage />
        },
        {
          path: ROUTES.CREATE_ORDER,
          element: <CreateOrderPage />
        },
        {
          path: ROUTES.PRODUCTS,
          element: <ProductPage />
        },
        {
          path: ROUTES.CREATE_PRODUCT,
          element: <CreateProductPage />,
        },
        {
          path: ROUTES.UPDATE_PRODUCT
        },
        {
          path: ROUTES.PRODUCT_DETAIL,
          element: <ProductDetailPage />
        },
        {
          path: ROUTES.ROUTES,
          element: <RoutePage />
        },
        {
          path: ROUTES.CREATE_ROUTE,
          element: <CreateRoutePage />
        },
        {
          path: ROUTES.LOCATIONS,
          element: <LocationPage />,
        },
        {
          path: ROUTES.DELIVERY,
          element: <DeliveryPage />
        },
        {
          path: ROUTES.CREATE_DELIVERY,
          element: <CreateLocationPage />,
        },
        {
          path: ROUTES.DELIVERY_DETAIL,
          element: <DeliveryDetailPage />
        },
        {
          path: ROUTES.GARAGE,
          element: <GaragePage />
        },
        {
          path: ROUTES.GARAGE_DETAIL,
          element: <GarageDetailPage />
        },
        {
          path: ROUTES.CREATE_GARAGE,
          element: <CreateGaragePage />
        },
        {
          path: ROUTES.TRUCKS,
          element: <TransportationPage />
        },
        {
          path: ROUTES.CREATE_TRUCK,
          element: <CreateTransportationPage />,
        },
        {
          path: ROUTES.ORGANIZATIONS,
          element: <OrganizationPage />
        },
        {
          path: ROUTES.CREATE_ORGANIZATION,
          element: <CreateOrganizationPage />
        },
        {
          path: ROUTES.DRIVERS,
          element: <DriverPage />
        },
        {
          path: ROUTES.CREATE_DRIVER,
          element: <CreateDriverPage />
        },
        {
          path: ROUTES.DRIVER_DETAIL,
          element: <DriverDetailPage />
        },
        {
          path: ROUTES.STAFFS,
          element: <StaffPage />
        },
        {
          path: ROUTES.CREATE_STAFF,
          element: <CreateStaffPage />
        },
        {
          path: ROUTES.STAFF_DETAIL,
          element: <StaffDetailPage />
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);

  const queryClient = new QueryClient();

  return (
    <div className='font-poppins'>
      <Provider store={store}>
        <DialogProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </DialogProvider>
      </Provider>
    </div>
  );
}

export default App;
