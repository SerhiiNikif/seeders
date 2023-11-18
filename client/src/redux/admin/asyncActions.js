import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_STAGE ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_HEROKU_URL;

export const fetchAuth = createAsyncThunk(
  "admin/fetchAuthStatus",
  async (params) => {
    const { email, password, action } = params;
    const { data } = await axios.post(
      `${API_URL}/auth/${action}`,
      {email, password}
    );

    return data;
  }
);

export const fetchLogout = createAsyncThunk(
  "admin/fetchLogoutStatus",
  async (params) => {
    const { refreshToken } = params;
    const { data } = await axios.post(
      `${API_URL}/auth/logout`,
      {refreshToken}
    );

    return data;
  }
);