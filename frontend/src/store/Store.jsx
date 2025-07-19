import { configureStore } from "@reduxjs/toolkit";


import ProductSlice from "./reducers/ProductReducer";
import UserSlice from "./reducers/UserReducer";

export const Store = configureStore({
    reducer:{

        productReducer : ProductSlice,
        userReducer: UserSlice,
    }
})