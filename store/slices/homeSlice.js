import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../API";

// get all homes api call function
export const allHomes = createAsyncThunk(
  "/home/get-all-homes",
  async (formValue, { rejectWithValue }) => {
    try {
      const response = await API.getAllHomes(formValue);
      return await response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerHome = createAsyncThunk(
  "/home/create-home",
  async (formValue, { rejectWithValue }) => {
    try {
      let response = await API.registerHomeAPI(formValue);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const homeSlice = createSlice({
  name: "Home",
  initialState: {
    Homes: {},
    // BecomeHostRequestBody: {},
    loading: false,
    error: "",
    success: "",
  },
  reducers: {
    clearSuccessMsg: (state, action) => {
      state.success = action.payload;
    }
  },
  extraReducers: {
    [allHomes.pending]: (state, action) => {
      state.loading = true;
      state.error = "";
    },
    [allHomes.fulfilled]: (state, action) => {
      state.loading = false;
      state.Homes = action.payload;
    },
    [allHomes.rejected]: (state, action) => {
      state.loading = false;      
      state.error = action.payload.status;
    },

    [registerHome.pending]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    },
    [registerHome.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action?.payload?.message;
    },
    [registerHome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
  },
});

export const { clearSuccessMsg } = homeSlice.actions;

export default homeSlice.reducer;
