import { configureStore } from "@reduxjs/toolkit";
import jimReducer from './jimSlice'

export const store = configureStore({
    reducer: {
        jim : jimReducer,
    }
})
