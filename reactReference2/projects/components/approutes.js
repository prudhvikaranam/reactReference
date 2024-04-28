import {
    createBrowserRouter,
    RouterProvider,
    errorElement
} from "react-router-dom";
import Header from "./header";
import Contact from "./contact";
import Cart from "./cart";
import Body from "./body";
import ContactForm from "./contactForm";
import Error from "./error";

const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <Header />,
        errorElement: <Error />,
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
                        path: '/Contact/form',
                        element: <ContactForm />,
                    }
                ]
            },
            {
                path: '/Cart',
                element: <Cart />
            },
            // {
            //     path: '*',
            //     element: <Error />
            // } // This we can show the error page
            // { errorElement: <Error /> },
            // This way we can get the error in the console or will help to redirection or etc....
        ],
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/Cart',
        element: <Cart />
    }
])

const routerProvider = <RouterProvider router={appRouter} />

export { appRouter, routerProvider };