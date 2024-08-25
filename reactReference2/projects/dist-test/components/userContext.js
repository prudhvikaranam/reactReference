import { createContext } from "react";

export const userContext = createContext();

// By Above we are creating createContext

// Then we use the userContext in the parent component and provide the value which should be shared to the component where we use the userContext like below


// const changeLoggedInUser = (e) => {
//     setUserName(e)
// }

// <userContext.Provider value={{ loggedInUser: userName, changeLoggedInUser }}>
//     {/* the loggedInUser value will be available to the child component which are added here */}
//     {/* We can also the use the  changeLoggedInUser method in the child components which are added here, refer withRestCard component on how we are using the method and how we are passing the value*/}
// </userContext.Provider>
