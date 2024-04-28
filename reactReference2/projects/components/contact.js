import ContactForm from "./contactForm";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link
} from "react-router-dom";
const Contact = () => {
    return (
        <>
            <h2>This is a Contact page</h2>
            <div>
                <Link to={'/' + 'Contact/form'}>Show Contact form</Link>
            </div>
            <Outlet />
        </>
    )
}


export default Contact;