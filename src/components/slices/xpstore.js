import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStartOpen: false,
  isResumeOpen: false,
  isComingSoonOpen: false,
  isNotePadOpen: false,
  isFolderOpen: false,
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
    toggleNotePad: (state) => {
      state.isNotePadOpen = !state.isNotePadOpen;
    },
    toggleFolder: (state) => {
      state.isFolderOpen = !state.isFolderOpen;
    },
  },
});

export const {
  toggleStartMenu,
  toggleResume,
  toggleComingSoon,
  toggleNotePad,
  toggleFolder,
} = xpSlice.actions;

export default xpSlice.reducer;
