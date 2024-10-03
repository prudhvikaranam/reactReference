import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Locations from "./Locations";
import Offers from "./Offers";
import Login from "./Login";
import Admin from "./Admin";
import Cart from "./Cart";
import appStore from "../rtk-store/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { restrosApi } from "../rtk-store/apiQuery";
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

const RouteProvider = (
  <ApiProvider api={restrosApi}>
    <Provider store={appStore}>
      <RouterProvider router={routes} />
    </Provider>
    ;
  </ApiProvider>
);

export default RouteProvider;
