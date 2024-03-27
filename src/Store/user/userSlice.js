import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Navigate } from "react-router-dom";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        userCredential
      );
      return response.data.user;
    } catch (error) {
      console.log("An error occurred:", error.response);
      throw error.response;
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
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload
          console.log(state.user);
        }).addCase(loginUser.rejected, (state, action) => {
          console.log(action.payload)
        })
    }
})

export default userSlice.reducer
