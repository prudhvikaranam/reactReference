import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
import Header from "./header";
import Contact from "./contact";
import Cart from "./cart";

const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/cart',
        element: <Cart />
    }

])

const routerProvider = <RouterProvider router={appRouter} />

export { appRouter, routerProvider };