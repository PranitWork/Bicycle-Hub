import { configureStore } from "@reduxjs/toolkit";

import SelectProductSlice from "./reducers/selectProductReducer"

export const Store = configureStore({
    reducer:{
        selectProductReducer: SelectProductSlice,
    }
})