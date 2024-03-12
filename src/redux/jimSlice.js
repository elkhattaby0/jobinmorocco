import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jobs: [],
    cvs: [],
    auth: ''
}

export const jimSlice = createSlice({
    name: 'jim',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        addCv: (state, action) => {
            state.cvs.push(action.payload);
        },
        addAuth: (state, action) => {
            state.auth = action.payload;
        }
    }
})

export default jimSlice.reducer;
export const { addJob, addCv, addAuth } = jimSlice.actions;