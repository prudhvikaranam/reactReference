import { NavLink, Outlet } from "react-router-dom";
import userContext from "../reactContext/userContext";
import UserDetails from "./UserDetails";
import { Provider } from "react-redux";
import appStore from "../rtk-store/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { restrosApi } from "../rtk-store/apiQuery";
const Header = () => {
  const headers = ["Home", "Locations", "Offers", "Admin"];

  return (
    <>
      <ApiProvider api={restrosApi}>
        <Provider store={appStore}>
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
              <UserDetails />
            </div>
            <Outlet />
          </userContext.Provider>
        </Provider>
      </ApiProvider>
    </>
  );
};

export default Header;
