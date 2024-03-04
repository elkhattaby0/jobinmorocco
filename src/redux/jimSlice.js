import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jim: []
}

export const jimSlice = createSlice({
    name: 'jim',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.jim.push(action.payload);
        }
    }
})

export default jimSlice.reducer;
export const { addAuth } = jimSlice.actions;