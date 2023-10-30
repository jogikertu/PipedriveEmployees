import { createSlice } from "@reduxjs/toolkit";

export const tribesSlice = createSlice({
  name: "tribes",
  initialState: {
    status: "default", // default | loading | error
    list: [],
  },
  reducers: {
    loadTribes: (state) => {
      state.status = "loading";
    },
    loadTribesSuccess: (state, action) => {
      state.status = "default";
      state.list = action.payload;
    },
    loadTribesFailure: (state) => {
      state.status = "error";
    },
  },
});

export const { loadTribes, loadTribesSuccess, loadTribesFailure } =
  tribesSlice.actions;
export default tribesSlice.reducer;
