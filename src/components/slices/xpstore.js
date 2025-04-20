import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStartOpen: false,
  isResumeOpen: false,
};

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {
    toggleResume: (state) => {
      state.isResumeOpen = !state.isResumeOpen;
    },
    toggleStartMenu: (state) => {
      state.isStartOpen = !state.isStartOpen;
    },
  },
});

export const { toggleStartMenu, toggleResume } = xpSlice.actions;

export default xpSlice.reducer;
