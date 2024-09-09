const { configureStore } = require("@reduxjs/toolkit");
import { restrosApi } from "./apiQuery";
import locationSlice from "./locationSlice";
import offerSlice from "./offersSlice";

const appStore = configureStore({
  reducer: {
    offers: offerSlice,
    locations: locationSlice,
    [restrosApi.reducerPath] : restrosApi.reducer
  },
  middleware : (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    restrosApi.middleware
  ]
});

export default appStore;
