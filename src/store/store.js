import { configureStore } from "@reduxjs/toolkit";
import futsalReducer from "./features/Futsal/futsal";

const store = configureStore({
    reducer: {
        futsal: futsalReducer,
    }
});

export default store;
