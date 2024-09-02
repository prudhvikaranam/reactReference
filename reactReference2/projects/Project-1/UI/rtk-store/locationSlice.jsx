import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name : "location",
    initialState : ['Hyderabad','Kurnool','Bangalore']
})

export default locationSlice.reducer;