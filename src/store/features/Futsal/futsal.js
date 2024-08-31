import { createSlice } from "@reduxjs/toolkit";

const futsalSlice = createSlice({
    name: "futsal",
    initialState: [],
    reducers: {
        setSelectedFutsal: (state, action) => {
            return action.payload
        },
    }
});

export const { setSelectedFutsal } = futsalSlice.actions;
export default futsalSlice.reducer;
