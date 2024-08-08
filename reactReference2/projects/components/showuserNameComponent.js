import { useContext } from "react";
import { userContext } from "./userContext";


const UserLoggedName = ({userLoginStatus,setUserLoginStatus}) => {
    const { loggedInUser } = useContext(userContext);


    return (
        <div onClick={() => {
            setUserLoginStatus(!userLoginStatus)
        }}>{userLoginStatus ? `Welcome ${loggedInUser}` : 'Login'}</div>
    )
}

export default UserLoggedName;