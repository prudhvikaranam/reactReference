import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Locations from "./Locations";
import Offers from "./Offers";
import Login from "./Login";
import Admin from "./Admin";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/Home",
        element: <Body />
      },
      {
        path: "/Locations",
        element: <Locations />
      },
      {
        path: "/Offers",
        element: <Offers />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Admin",
        element: <Admin />
      }
    ]
  }
]);

const RouteProvider = <RouterProvider router={routes} />;
export default RouteProvider;
