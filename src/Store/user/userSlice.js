import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    const request = await useFetch(`/sub-categories?[filters] [caregories] [id] [$eq]=${catId}`)
  }
);
const userSlice = createSlice({
    name:"user",
    initialState:{
        loading: false,
        user: null,
        error: null
    }
})

export default userSlice.reducer