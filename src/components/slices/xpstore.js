import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStartOpen: false,
  isResumeOpen: false,
  isComingSoonOpen: false,
  isNotePadOpen: false,
  isProjectOpen: false,
  isImgtoPdfopen: false,
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
    toggleProject: (state) => {
      state.isProjectOpen = !state.isProjectOpen;
    },
    toggleImgtoPdF: (state) => {
      state.isImgtoPdfopen = !state.isImgtoPdfopen;
    },
  },
});

export const {
  toggleStartMenu,
  toggleResume,
  toggleComingSoon,
  toggleNotePad,
  toggleProject,
  toggleImgtoPdF,
} = xpSlice.actions;

export default xpSlice.reducer;
