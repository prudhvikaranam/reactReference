import { useEffect, useState } from 'react';
import '../style.css';
import Body from './body';
import {
    Outlet
} from "react-router-dom";
const Header = () => {
    const [userLoginStatus, setUserLoginStatus] = useState(false);

    let navList = ['Home', 'Offers', 'Contact', 'Cart'];
    console.log('Header');

    return (
        <>
            <div className="header">
                <div><h1>Foddies</h1></div>
                <div className='list'>
                    {navList.map((element, i) => {
                        return <span className='list' key={i}>{element}</span>
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