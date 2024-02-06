import { createAsyncThunk } from "@reduxjs/toolkit";
  const apiToken =
    "bbb76ba3ccbf2edf89e2c792da96b196928efbe6257a5534a7161fee4084f6d6b0047e04135bdb8f6fc992f27c0536da2879ce80355d28d175cce6c0e898388ddc237d9cc284765eff69373dc58aa37e455da24d293d1c54b9ac83d88bd7b85a19f08fada0185929804db7d0d25821d1b850fab7470da6afe201a6272d9d9471";
  const apiUrl = "http://localhost:1337/api";
import axios from "axios";

const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (type, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(
        apiUrl + `/products?populate=*&[filters] [type] [$eq]=${type}`,
        {
          headers: {
            Authorization: "bearer " + apiToken,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export default getProducts;



