/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export const productDetailsSlice = createSlice({
  name: "fetchProducts",
  initialState: {
    product: {},
  },
  reducers: {
    getProductDetails: (state, action) => {
      const { products } = action.payload;
      const { id } = action.payload;
      const value = products.filter((product) => product.id === id);
      const newState = {
        ...state,
        product: value[0],
      };
      return newState;
    },
  },
});

export const { getProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
