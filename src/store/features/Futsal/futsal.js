import { createSlice } from "@reduxjs/toolkit";

const futsalSlice = createSlice({
    name: "futsal",
    initialState: [],
    reducers: {
        setSelectedFutsal: (state, action) => {
            state = state.pop();
            state = [action.payload];
        },
    }
});

export const { setSelectedFutsal } = futsalSlice.actions;
export default futsalSlice.reducer;
