import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../API";

export const SignIn = createAsyncThunk(
  "/user/signin",
  async (formData, { rejectWithValue }) => {
    try {
      let response = await API.signIn(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    userInfo: null,
    loading: false,
    error: "",
    success: false,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    setLogout: (state) => {
      localStorage.clear();
      state.userInfo = null;
    },
  },
  extraReducers: {
    [SignIn.pending]: (state) => {
      state.loading = true;
      state.error = "";
      state.success = false;
    },
    [SignIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      localStorage.setItem("airSecret", JSON.stringify({ ...payload }));

      state.success = true;
    },
    [SignIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.status;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
