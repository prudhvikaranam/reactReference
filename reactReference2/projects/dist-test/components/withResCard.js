import { useContext } from "react";
import { userContext } from "./userContext";

export const withRestCard = (OriginalComponent) => {
    const { loggedInUser, changeLoggedInUser } = useContext(userContext);

    return (props) => {
        return (
            <div className="promotedContainer" id="promotedContainer">
                <div className={props.promoted === 'yes' ? 'promoted h8' : 'non-promoted h8'}>{props.promoted === 'yes' ? 'Promoted' : 'Non-Promoted'}</div>

                {/* Below code is for testing the context functionalities starts here*/}
                {/* <b>User  :{loggedInUser} </b>is from context...
                <input type="text" onChange={(e) => {
                    changeLoggedInUser(e.target.value);
                }} value={loggedInUser} autoFocus /> */}
                {/* Below code is for testing the context functionalities ends here*/}



                <OriginalComponent {...props} />
            </div>

        )
    }
}