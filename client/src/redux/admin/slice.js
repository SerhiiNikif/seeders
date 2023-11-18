import { createSlice } from "@reduxjs/toolkit";

import { fetchAuth } from "./asyncActions";
import { getAdminFromLS } from "../../utils/getAdminFromLS";

const {email, isAuth, accessToken} = getAdminFromLS();

const initialState = {
  email,
  isAuth,
  accessToken,
  refreshToken: "",
  status: "loading",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    removeAdmin: (state) => {
      state.email = "";
      state.isAuth = false;
      state.accessToken = "";
      state.refreshToken = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.email = "";
        state.isAuth = false;
        state.accessToken = "";
        state.refreshToken = "";
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        const {email} = action.payload.user;
        state.email = email;
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.status = "success";
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
        state.email = "";
        state.isAuth = false;
        state.accessToken = "";
        state.refreshToken = "";
      })
  },
});

export const { removeAdmin } = adminSlice.actions;

export default adminSlice.reducer;
