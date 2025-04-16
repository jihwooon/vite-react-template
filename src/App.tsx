import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './page/Home';
import Login from './page/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
