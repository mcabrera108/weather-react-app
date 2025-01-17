import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";
import Home from "./pages/Home";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
export default Router;
