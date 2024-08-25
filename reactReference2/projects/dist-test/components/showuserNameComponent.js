import { useContext } from "react";
import { userContext } from "./userContext";
import { useSelector } from "react-redux";
import { useFetchRestaurentsQuery } from "./rtk-redux-utils/apistore";


const UserLoggedName = ({ userLoginStatus, setUserLoginStatus }) => {
    const { loggedInUser } = useContext(userContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
            <div>
                Cart Items {cartItems.length} [**<h7>Value from Redux Toolkit</h7>]
            </div>

            <div onClick={() => {
                setUserLoginStatus(!userLoginStatus)
            }}>{userLoginStatus ? `Welcome ${loggedInUser}` : 'Login'}</div>

        </>
    )
}

export default UserLoggedName;