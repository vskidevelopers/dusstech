
import { configureStore } from "@reduxjs/toolkit";
import {userReducer}  from "./Auth-Slice";

const store = configureStore({
    reducer: {
        user: userReducer ,
    },
});
export default store;