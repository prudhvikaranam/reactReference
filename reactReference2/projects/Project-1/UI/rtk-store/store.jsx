const { configureStore } = require("@reduxjs/toolkit");
import locationSlice from "./locationSlice";
import offerSlice from "./offersSlice";

const appStore = configureStore({
  reducer: {
    offers: offerSlice,
    locations: locationSlice
  }
});

export default appStore;
