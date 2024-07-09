import { useState } from 'react';
import '../style.css';
import {
    Link,
    NavLink,
    Outlet,
} from "react-router-dom";
const Header = () => {
    const [userLoginStatus, setUserLoginStatus] = useState(false);

    let navList = ['Home', 'Offers', 'Contact', 'Cart', 'Groceries'];

    const makeNavLinkActive = (props) => {
        return props.isActive && 'active-link';
    }   

    return (
        <>
            <div className="header">
                <div><h1>Foddies</h1></div>
                <div className='list'>
                    {navList.map((element, i) => {
                        return <span className='list' key={i}>
                            <NavLink to={element === 'Home' ? '/' : '/' + element} className={makeNavLinkActive}>
                                {element}
                            </NavLink>
                        </span>
                    })}
                </div>
                <div onClick={() => {
                    setUserLoginStatus(!userLoginStatus)
                }}>{userLoginStatus ? 'Log Out' : 'Login'}</div>
            </div>
            <hr />

            <Outlet />
        </>
    )
}


export default Header;