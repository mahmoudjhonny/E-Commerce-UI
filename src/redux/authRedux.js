import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("users/login", async (user) => {
  const res = await axios.post(
    "https://ecommerce-api-nsjf.onrender.com/api/auth/login",
    user
  );
  return res.data;
});

export const userRegister = createAsyncThunk("users/register", async (user) => {
  const res = await axios.post(
    "https://ecommerce-api-nsjf.onrender.com/api/auth/register",
    user
  );
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    created: "",
    userInfo: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    /** Register **/

    [userRegister.pending]: (state) => {
      state.loading = true;
    },
    [userRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.created = action.payload;
    },
    [userRegister.rejected]: (state) => {
      state.error = true;
    },

    /** Login **/

    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.userInfo = action.payload;
    },
    [userLogin.rejected]: (state) => {
      state.error = true;
    },
  },
});

export default userSlice.reducer;
