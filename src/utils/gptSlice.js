import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { 
    isGptSearchView: false
  },
  reducers: {
    toggleGptSearchView : (state) => {
      state.isGptSearchView = !state.isGptSearchView;
    }
  },
})

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;