import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice";
import HomeReducer from "./slices/homeSlice";

export default configureStore({
    reducer: {
        AllHomes: HomeReducer,
        Auth: authReducer,
    }
})