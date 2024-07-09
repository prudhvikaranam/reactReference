import {
    createBrowserRouter,
    RouterProvider,
    errorElement
} from "react-router-dom";
import Header from "./Header";
import Contact from "./contact";
import Cart from "./cart";
import Body from "./body";
import ContactForm from "./contactForm";
import Error from "./error";
import RestaurentDetail from "./restaurentDetail";
import { Suspense, lazy } from "react";


const Groceries = lazy(() => import('./Groceries'));

const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <Header />,
        errorElement: <Error />, // This is showing the error page but not the error messages, Need to understand more
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/Contact',
                element: <Contact />,
                children: [
                    {
                        path: 'form',
                        element: <ContactForm />,
                    }
                ]
            },
            {
                path: '/Cart',
                element: <Cart />
            },
            {
                path: '/restaurent/:resId',
                element: <RestaurentDetail />
            },
            {
                path: '*',
                element: <Error />
            } // This we can show the error page
            // { errorElement: <Error /> },
            // This way we can get the error in the console or will help to redirection or etc....
        ],
    },
    {
        path: 'Groceries',
        element: (<Suspense fallback={<h2>Groceries Page is getting loaded...</h2>}><Groceries /></Suspense>)
    }
])

const routerProvider = <RouterProvider router={appRouter} />

export { appRouter, routerProvider };