import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_STAGE ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_HEROKU_URL;

export const fetchUsers = createAsyncThunk(
  "user/fetchGetUsersStatus",
  async (params) => {
    const { currentPage, limit } = params;

    const { data } = await axios.get(
      `${API_URL}/users?page=${currentPage}&limit=${limit}`,
    );

    return data;
  }
);

export const fetchCreate = createAsyncThunk(
  "user/fetchCreateUserStatus",
  async (params) => {
    const {user, accessToken} = params;

    const { data } = await axios.post(
      `${API_URL}/users`,
      user,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        }
      }
    );

    return data;
  }
);

export const fetchGenerate = createAsyncThunk(
  "user/fetchGenerateUserStatus",
  async () => {
    const { data } = await axios.post(
      `${API_URL}/default`,
    );

    return data;
  }
);

export const fetchDeleteUsers = createAsyncThunk(
  "user/fetchDeleteUsersStatus",
  async (params) => {
    const {email} = params;
    
    const { data } = await axios.delete(
      `${API_URL}/users`,
      { data: { email } }
    );

    return data;
  }
);
