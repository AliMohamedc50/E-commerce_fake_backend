import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./product/productSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
  },
});
