import { NavLink, Outlet } from "react-router-dom";
const Header = () => {
  const headers = ["Home", "Locations", "Offers", "Admin"];
  return (
    <>
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
        <div className="user-container" id="user-container">
          You've not yet logged in
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
