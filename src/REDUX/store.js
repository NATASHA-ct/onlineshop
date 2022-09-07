import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
