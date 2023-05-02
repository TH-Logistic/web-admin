import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseRoutes, Route, ROUTES } from './routes/routes';
import ErrorPage from './pages/Error/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const mapSubRouteToRoute = (route: { [key: string]: Route } | undefined): any => {
    if (!route || route?.subroutes) return undefined
    return Object.entries(route).map(subroute => ({
      element: subroute[1].element,
      path: subroute[1].index === true ? undefined : subroute[1].path,
      index: subroute[1].index,
      subroute: mapSubRouteToRoute(subroute[1].subroutes)
    }))
  }


  const router = createBrowserRouter(
    Object
      .keys(ROUTES)
      .map(
        (key) => (
          {
            element: ROUTES[key as BaseRoutes].element,
            path: ROUTES[key as BaseRoutes].path,
            index: ROUTES[key as BaseRoutes].index,
            children: mapSubRouteToRoute(ROUTES[key as BaseRoutes].subroutes),
            errorElement: <ErrorPage />
          }
        )
      )
  );

  const queryClient = new QueryClient();

  return (
    <div className='font-poppins'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
