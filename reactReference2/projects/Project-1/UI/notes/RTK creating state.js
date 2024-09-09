// ******************************************************* Redux RTK creating state*****************************************************;

// Steps are below
// Step 1 -> create store using configureStore

// Step 2 -> Create Slice

// Step 3 -> Add slice details in the store reducer

// Step 4 -> Add <Provider store={appStore}> in the root application or wherever required

// Step 5 -> utilize the store using useSelector()/To disptach use useDispatch()

// Step 6 -> N/A


// 1 )-----------appStore.js file

const { configureStore, createSlice } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default appStore;

// 2)-----------cartSlice.js file

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


// 4) -----------App.js file

import { Provider } from "react-redux";

<Provider store={appStore}>components goes into here</Provider>

// 5)-----------Componentswhere we use values.js file
import { useSelector } from "react-redux";

const cartSelector = useSelector((store) => store.cart);

// 5)-----------Componentswhere we udpate values.js file
import { useDispatch } from "react-redux";

const cartDispatch = useDispatch();

cartDispatch(addItems(1))



