import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";
// import useFetch from "../../hooks/useFetch";



export const searchProduct = createAsyncThunk(
  "searchProductSlice/searchProduct",
  async (searchPro, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const headers = {
      Authorization:
        "bearer " +
        "bbb76ba3ccbf2edf89e2c792da96b196928efbe6257a5534a7161fee4084f6d6b0047e04135bdb8f6fc992f27c0536da2879ce80355d28d175cce6c0e898388ddc237d9cc284765eff69373dc58aa37e455da24d293d1c54b9ac83d88bd7b85a19f08fada0185929804db7d0d25821d1b850fab7470da6afe201a6272d9d9471",
    };

    try {
      const response = await axios.get(
        `http://localhost:1337/api/products?filters[title][$startsWithi]=${
          searchPro ? searchPro : null
        }&populate=*`,
        {
          headers: headers,
        }
      );

      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const searchProductSlice = createSlice({
  name: "searchProductSlice",
  initialState: {
    loading: false,
    productSearch: [],
    error: null,
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.productSearch = action.payload;
        // console.log(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default searchProductSlice.reducer;