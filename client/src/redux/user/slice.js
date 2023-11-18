import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers, fetchGenerate, fetchCreate, fetchDeleteUsers } from "./asyncActions";

const initialState = {
  items: [],
  limit: 6,
  countPages: 1,
  currentPage: 1,
  status: "loading",
  statusCreate: "",
  statusGenerate: "",
  statusDeleteUsers: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload.users;
        state.limit = action.payload.limit;
        state.countPages = action.payload.countPages;
        state.status = "success";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "error";
        state.items = [];
      })

      .addCase(fetchCreate.pending, (state) => {
        state.statusCreate = "loading";
      })
      .addCase(fetchCreate.fulfilled, (state) => {
        state.statusCreate = "success";
      })
      .addCase(fetchCreate.rejected, (state) => {
        state.statusCreate = "error";
      })

      .addCase(fetchGenerate.pending, (state) => {
        state.statusGenerate = "loading";
      })
      .addCase(fetchGenerate.fulfilled, (state, action) => {
        state.statusGenerate = "success";
      })
      .addCase(fetchGenerate.rejected, (state) => {
        state.statusGenerate = "error";
      })

      .addCase(fetchDeleteUsers.pending, (state) => {
        state.statusDeleteUsers = "loading";
      })
      .addCase(fetchDeleteUsers.fulfilled, (state, action) => {
        state.statusDeleteUsers = "success";
      })
      .addCase(fetchDeleteUsers.rejected, (state) => {
        state.statusDeleteUsers = "error";
      })
  },
});

export const { setCurrentPage } = userSlice.actions;

export default userSlice.reducer;
