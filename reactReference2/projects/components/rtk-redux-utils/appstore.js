import cartSliceReducer from "./cartSlice";
const { configureStore } = require("@reduxjs/toolkit");
import { dashboardData } from './apistore';


const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
        [dashboardData.reducerPath] : dashboardData.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dashboardData.middleware)

})


export default appStore;