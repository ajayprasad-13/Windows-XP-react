import { configureStore } from "@reduxjs/toolkit";
import xpReducer from "../slices/xpstore";

export const store = configureStore({
  reducer: {
    xp: xpReducer,
  },
});
