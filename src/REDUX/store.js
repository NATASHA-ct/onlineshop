/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice";
import productDetailsReducer from "./products/productsdetailsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailsReducer,
  },
});

export default store;
