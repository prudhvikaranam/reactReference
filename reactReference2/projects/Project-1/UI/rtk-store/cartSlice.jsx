import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: 0,
  reducers: {
    addToCart: (state, actions) => {
      return (state = state + actions.payload);
    },
    removeFromCart: (state, actions) => {
      return (state = state - actions.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
