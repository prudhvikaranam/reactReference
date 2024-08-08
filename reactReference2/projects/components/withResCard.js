import { useContext } from "react";
import { userContext } from "./userContext";

export const withRestCard = (OriginalComponent) => {
    const { loggedInUser, changeLoggedInUser } = useContext(userContext);

    return (props) => {
        return (
            <div className="promotedContainer" id="promotedContainer">
                <h8 className={props.promoted === 'yes' ? 'promoted' : 'non-promoted'}>{props.promoted === 'yes' ? 'Promoted' : 'Non-Promoted'}</h8>
                <b>User  :{loggedInUser} </b>is from context...
                <input type="text" onChange={(e) => {
                    changeLoggedInUser(e.target.value);
                }} value={loggedInUser} autoFocus />
                <OriginalComponent {...props} />
            </div>

        )
    }
}