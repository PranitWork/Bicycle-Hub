
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

const SelectProductSlice = createSlice({
  name: "SelectedProduct",
  initialState,
  reducers: {
    selectProductId: (state, action) => {
      state.id = action.payload; 
    },
  },
});

export const { SelectProductId } = SelectProductSlice.actions;
export default SelectProductSlice.reducer;