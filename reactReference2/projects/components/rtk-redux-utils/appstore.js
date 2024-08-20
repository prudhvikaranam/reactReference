import cartSliceReducer from "./cartSlice";
const { configureStore } = require("@reduxjs/toolkit");



const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer
    }
})


export default appStore;