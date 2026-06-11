import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favoriteSlice";

import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    auth: authReducer
  }
});