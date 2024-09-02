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






















// ******************************************************* Redux RTK creating state*****************************************************;


// -----------appStore.js file

const { configureStore, createSlice } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default appStore;

// -----------cartSlice.js file

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: 'nameOfSlice', // This will be available as type when we use
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload.item)
    },
    removeItems: (state, action) => {
      state.push(action.payload.item)
    }
  }
})

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;


// -----------App.js file

import { Provider } from "react-redux";

<Provider store={appStore}>components goes into here</Provider>

// -----------Componentswhere we use values.js file
import { useSelector } from "react-redux";

const cartSelector = useSelector((store) => store.cart);

// -----------Componentswhere we udpate values.js file
import { useDispatch } from "react-redux";

const cartDispatch = useDispatch();

cartDispatch(addItems(1))