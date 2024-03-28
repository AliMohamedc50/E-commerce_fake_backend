import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        userCredential
      );
      return response.data.user;
    } catch (error) {
      const { status = null, data = null } = error.response;
      return rejectWithValue({ status, message: data.error.message });
    }
  }
);

const userSlice = createSlice({
    name:"user",
    initialState:{
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (bulder) =>{
      bulder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload;
          console.log(state.user);
          state.loading = false;
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          // console.log(action.payload);
          state.error = action.payload
          state.loading = false;
        });
    }
})

export default userSlice.reducer
