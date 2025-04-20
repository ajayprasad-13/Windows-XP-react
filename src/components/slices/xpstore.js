import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStartOpen: false,
  isResumeOpen: false,
  isComingSoonOpen: false,
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
    toggleComingSoon: (state) => {
      state.isComingSoonOpen = !state.isComingSoonOpen;
    },
  },
});

export const { toggleStartMenu, toggleResume, toggleComingSoon } =
  xpSlice.actions;

export default xpSlice.reducer;
