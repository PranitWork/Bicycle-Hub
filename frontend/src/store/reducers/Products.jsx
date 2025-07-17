// src/store/reducers/selectedFolderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: [],
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    ProductID: (state, action) => {
      state.id = action.payload; 
    },
  },
});

export const { ProductID } = ProductSlice.actions;
export default ProductSlice.reducer;