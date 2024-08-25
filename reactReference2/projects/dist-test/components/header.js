import { useContext, useEffect, useState } from 'react';
import '../style.css';
import {
    Link,
    NavLink,
    Outlet,
} from "react-router-dom";
import { userContext } from './userContext';
import UserLoggedName from './showuserNameComponent';
import { Provider } from 'react-redux';
import appStore from './rtk-redux-utils/appstore';
const Header = () => {
    const [userLoginStatus, setUserLoginStatus] = useState(true);
    const [userName, setUserName] = useState('John Doe');

    let navList = ['Home', 'Offers', 'Contact', 'Cart', 'Groceries'];
    const makeNavLinkActive = (props) => {
        return props.isActive ? 'active-link' : '';
    }
    const changeLoggedInUser = (e) => {
        setUserName(e)
    }
    return (
        <>

            <Provider store = {appStore}>
            <userContext.Provider value={{ loggedInUser: userName, changeLoggedInUser }}>
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
                    <UserLoggedName userLoginStatus = {userLoginStatus} setUserLoginStatus = {setUserLoginStatus}></UserLoggedName>
                </div>
                <hr />

                <Outlet />
            </userContext.Provider>
            </Provider>
        </>
    )
}


export default Header;