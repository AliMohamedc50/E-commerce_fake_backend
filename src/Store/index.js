import { configureStore } from "@reduxjs/toolkit";
import product from "./product/productSlice";

export const store = configureStore({
  reducer: {
    product,
  },
});
