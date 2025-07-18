import { configureStore } from "@reduxjs/toolkit";

import SelectProductSlice from "./reducers/selectProductReducer";
import ProductSlice from "./reducers/ProductReducer";
import UserSlice from "./reducers/UserReducer";

export const Store = configureStore({
    reducer:{
        selectProductReducer: SelectProductSlice,
        productReducer : ProductSlice,
        userReducer: UserSlice,
    }
})