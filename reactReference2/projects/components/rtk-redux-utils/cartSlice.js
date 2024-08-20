import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartt',
    initialState: {
        items: ['Burger', 'Pizza']
    },
    reducers: {
        addItem: (state, action) => {

            // Notes: 
            // In older (Javascript version of) redux we should use the destructing way to update the state i.e., we should not mutate the state. ex : {...state, {....}}
            // In the newer (Redux toolkit - RTK) redux, we no need to desctruct the state and then update the state (which might be very complicated and confusing to the developers if the changes are in the deep nested objects/Arrays), **** but instead we can mutate the state (directly udpate the state as below). Destructing part and other necessary part (Immutating part ..) is taken care by Immer library which RTK uses internally******
            // And also here state is the local variable which is created by the reference of the original state, so if we try to assign the values to this STATE and think that orignal state is changed then it will not happen ex: state.item[4] = 'New value' --> This will not change orignal value.
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.items.pop(action.payload)
        }
    }
})


export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;