import { configureStore } from "@reduxjs/toolkit"
import HomeReducer from "./slices/homeSlice";

export default configureStore({
    reducer: {
        AllHomes: HomeReducer
    }
})