import { createAsyncThunk } from "@reduxjs/toolkit";
  const apiToken =
    "f12822874696adbf8c89262c58063e4f0f19f68fa9502cf4693e8fd4fd2120f277817abb1145de5d5288d1d9f3728800af32a2086bad7c7bb51e3e3e7e0648235bb60ffffc5b1cdf0aa32b164b4be38a488e30d79f9ea8196ae67efc573136c42b31980de693099382753a6a89dbbdd159dd2d95cfc340c70508152298e9ddf5";
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



