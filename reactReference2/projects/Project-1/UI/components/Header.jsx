import { NavLink, Outlet } from "react-router-dom";
import userContext from "../reactContext/userContext";
import UserDetails from "./UserDetails";
import { Provider } from "react-redux";
import appStore from "../rtk-store/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { restrosApi } from "../rtk-store/apiQuery";
import { useContext, useState } from "react";
import user from "../reactContext/userContext";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const headers = ["Home", "Locations", "Offers", "Admin"];
  const noOfCarts = useSelector((store) => store.cart);

  return (
    <>
        {/* <Provider store={appStore}> */}
          <userContext.Provider value={{ userName: "Tejas (From Provider)" }}>
            <div id="header-main-container" className="header-main-container">
              <div className="logo-container" id="logo-container">
                <h1>PTK-Restro's</h1>
              </div>
              <div className="navigation-container" id="navigation-container">
                {headers.map((data, i) => {
                  return (
                    <NavLink to={`/${data}`} key={i}>
                      {data}
                    </NavLink>
                  );
                })}
              </div>
                <NavLink to={'./cart'}>Cart {noOfCarts}</NavLink>

              <UserDetails />
            </div>
            <Outlet />
          </userContext.Provider>
        {/* </Provider> */}
    </>
  );
};

export default Header;
