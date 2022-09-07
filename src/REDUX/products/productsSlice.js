import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* eslint-disable */
const URL = "https://fakestoreapi.com/products";
const LOAD_PRODUCT = "LOAD_PRODUCT";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products/${id}");
  const result = await response.json();
  return result;
});

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async () => {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  }
);

export const fetchProductsSlice = createSlice({
  name: "fetchProducts",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getProductDetail: (state, action) => {
      const value = state.products.filter(
        (product) => product.id === action.payload
      );
      const newState = {
        ...state,
        product: value[0],
      };
      return newState;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        products: action.payload,
      };
      return newState;
    },

    [fetchProductDetails.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        product: action.payload,
      };
      return newState;
    },
  },
});

export const { getProductDetail } = fetchProductsSlice.actions;
export default fetchProductsSlice.reducer;
