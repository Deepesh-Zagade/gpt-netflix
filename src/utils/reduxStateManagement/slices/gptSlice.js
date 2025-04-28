import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptPage: false
    },
    reducers: {
        toggleShowGptPage: (state, action) => {
            state.showGptPage = !state.showGptPage;
        }
    }
})

export const { toggleShowGptPage } = gptSlice.actions;
export default gptSlice.reducer;