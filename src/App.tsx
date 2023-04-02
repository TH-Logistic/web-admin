import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, ROUTES } from './routes/routes';
import ErrorPage from './pages/error/Error';

function App() {

  const mapSubRouteToRoute = (route: { [key: string]: Route } | undefined): any => {
    if (!route || route?.subroutes) return undefined
    return Object.entries(route).map(subroute => ({
      element: subroute[1].element,
      path: subroute[1].path,
      subroute: mapSubRouteToRoute(subroute[1].subroutes)
    }))

  }

  const router = createBrowserRouter(
    Object
      .keys(ROUTES)
      .map(
        (key) => (
          {
            element: ROUTES[key].element,
            path: ROUTES[key].path,
            children: mapSubRouteToRoute(ROUTES[key].subroutes),
            errorElement: <ErrorPage />
          }
        )
      )
  );

  return (
    <div className='font-poppins'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
