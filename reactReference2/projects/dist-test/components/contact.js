import {
    Link, Outlet, NavLink
} from "react-router-dom";
const Contact = () => {

    const highLightIfActive = (props) => {
        return props.isActive ? 'active-link' : ''
    }
    return (
        <>
            <h2>This is a Contact page</h2>
            <div>
                <NavLink to={'form'} className = {highLightIfActive}>Show Contact form</NavLink>
            </div>
            <Outlet />
        </>
    )
}


export default Contact;