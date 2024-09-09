// ******************************************************* Use React Context*******************************************************;

// -----------Context.js file

import { createContext } from "react";

const UserContext = createContext({
  userName: "John Doe",
  changeName: () => {
    console.log(`Hey, I'll be available and call whenever you required...`);
  }
});

export default UserContext;


// -----------File where we are Consuming the context
const { userName, changeName } = useContext(UserContext); // This way we can use the React Context only to pass the data

console.log(userName);

// for class comonents we have to use as below to use the data as useContext hook is not valid there
<UserContext.Consumer>
  {(data) => console.log(data)}
</UserContext.Consumer>



// -----------App.js file


// If we want to udpate/modify the data, then we have to use Provider
import '';
<UserContext.Provider value={{ userName: 'newName', someMethod }}>components goes into here</UserContext.Provider>

// By above, All the components which are inside the provider will have new name, So basically Provider helps to modify/edit/udpate the data of context



// If we want to just utilize the data (mostly inital data), when we can just use the useContext and utilize data and if we want to modify we can make use of Providers

