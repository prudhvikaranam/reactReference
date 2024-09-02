import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offers",
  initialState: {
    currentOffers: "There are no current offers",
    upcomingOffers: "We have 50% offer on next Sunday"
  },
  reducers: {
    addOffer: (state, action) => {
      state.latestOffers = action.payload;
      console.log("state", state, action);
    }
  }
});

export const { addOffer } = offerSlice.actions;
export default offerSlice.reducer;
