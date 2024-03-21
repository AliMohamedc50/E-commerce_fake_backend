import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./product/productSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    cartSlice,
    userSlice,
  },
});

export default store;