import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* eslint-disable */
const URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
});

export const fetchProductsSlice = createSlice({
  name: "fetchProducts",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        products: action.payload,
      };
      return newState;
    },
  },
});

export default fetchProductsSlice.reducer;
