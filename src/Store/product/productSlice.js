import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import getProducts from "./thunk/getProducts";



const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
      // console.log(action.payload[1]);
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    });
  },
});



export { getProducts };

export default productsSlice.reducer;
