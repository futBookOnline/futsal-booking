// In futsalSlice.js

import { createSlice } from "@reduxjs/toolkit";

const futsalSlice = createSlice({
    name: "futsal",
    initialState: {
        id: "",
        name: "",
    },
    reducers: {
        setSelectedFutsal: (state, action) => {
            return action.payload;
        }
    }
});

// Define selectors outside of the createSlice
export const getSelectedFutsal = (state) => state.futsal;

export const { setSelectedFutsal } = futsalSlice.actions;
export default futsalSlice.reducer;
