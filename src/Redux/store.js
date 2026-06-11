import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import favoriteReducer from "./FavoriteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
  },
});