import { configureStore } from "@reduxjs/toolkit";
import futsalReducer from "./features/Futsal/futsal";

const store = configureStore({
    reducer: {
        futsal: futsalReducer, // Key should match the slice name
    }
});

export default store;
