import { useContext } from "react";
import user from "../reactContext/userContext";

const UserDetails = () => {
  const { userName, changeName } = useContext(user); // This way we can use the React Context only to pass the data
  const enableReactContext = false;

  const changeUser = (value) => {
    changeName(value);
  };

  return (
    <>
      <div className="user-container" id="user-container">
        {enableReactContext && (
          <>
            {userName ? (
              <span>
                Welcome <b>{userName}</b>
              </span>
            ) : (
              <span>You've not yet logged in</span>
            )}
            <button onClick={() => changeUser("John Smith")}>
              Change User
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;