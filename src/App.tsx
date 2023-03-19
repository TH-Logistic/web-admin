import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/routes';

function App() {

  const router = createBrowserRouter(
    Object
      .keys(ROUTES)
      .map(
        (key) => (
          {
            element: ROUTES[key].element,
            path: ROUTES[key].path
          }
        )
      )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
