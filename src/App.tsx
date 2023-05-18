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

function App() {
  // const mapSubRouteToRoute = (route: { [key: string]: Route } | undefined): any => {
  //   if (!route || route?.subroutes) return undefined
  //   return Object.entries(route).map(subroute => ({
  //     element: subroute[1].element,
  //     path: subroute[1].index === true ? undefined : subroute[1].path,
  //     index: subroute[1].index,
  //     subroute: mapSubRouteToRoute(subroute[1].subroutes)
  //   }))
  // }


  // const router = createBrowserRouter(
  //   Object
  //     .keys(ROUTES)
  //     .map(
  //       (key) => (
  //         {
  //           element: ROUTES[key as BaseRoutes].element,
  //           path: ROUTES[key as BaseRoutes].path,
  //           index: ROUTES[key as BaseRoutes].index,
  //           children: mapSubRouteToRoute(ROUTES[key as BaseRoutes].subroutes),
  //           errorElement: <ErrorPage />
  //         }
  //       )
  //     )
  // );

  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      path: '/auth',
      children: [
        {
          element: <AuthPage />,
          index: true,
        },
        {
          element: <ForgotPasswordPage />,
          path: '/auth/forgot-password'
        }
      ]
    },
    {
      element: <BaseLayout />,
      path: '/',
      children: [
        {
          index: true,
          element: <OrderPage />
        },
        {
          path: '/orders',
          element: <OrderPage />
        },
        {
          path: '/products',
          element: <ProductPage />
        },
        {
          path: '/products/create',
          element: <CreateProductPage />,
        },
        {
          path: '/products/update/:productId'
        },
        {
          path: '/products/:productId',
          element: <ProductDetailPage />
        },
        {
          path: "/routes",
          element: <RoutePage />
        },
        {
          path: '/routes/create',
          element: <CreateRoutePage />
        },
        {
          path: "/locations",
          element: <LocationPage />,
        },
        {
          path: '/locations/delivery',
          element: <DeliveryPage />
        },
        {
          path: "/locations/delivery/create",
          element: <CreateLocationPage />,
        },
        {
          path: '/locations/garage',
          element: <GaragePage />
        },
        {
          path: '/locations/garage/create',
          element: <CreateGaragePage />
        },
        {
          path: "/trucks",
          element: <TransportationPage />
        },
        {
          path: "/trucks/create",
          element: <CreateTransportationPage />,
        },
        {
          path: "/organizations",
          element: <OrganizationPage />
        },
        {
          path: "/organizations/create",
          element: <CreateOrganizationPage />
        },
        {
          path: "/drivers",
          element: <DriverPage />
        },
        {
          path: "/drivers/create",
          element: <CreateDriverPage />
        },
        {
          path: '/drivers/:driverId',
          element: <DriverDetailPage />
        },
        {
          path: "/staffs",
          element: <StaffPage />
        },
        {
          path: "/staffs/create",
          element: <CreateStaffPage />
        },
        {
          path: '/staffs/:staffId',
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
