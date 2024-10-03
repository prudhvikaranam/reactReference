const { configureStore } = require("@reduxjs/toolkit");
import { restrosApi } from "./apiQuery";
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";
import offerSlice from "./offersSlice";

const appStore = configureStore({
  reducer: {
    offers: offerSlice,
    locations: locationSlice,
    cart: cartSlice,
    [restrosApi.reducerPath]: restrosApi.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    restrosApi.middleware
  ]
});

export default appStore;
