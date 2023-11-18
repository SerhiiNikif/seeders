import { configureStore } from "@reduxjs/toolkit";

import user from "./user/slice";
import admin from "./admin/slice";

export const store = configureStore({
  reducer: {
    user,
    admin,
  },
});
