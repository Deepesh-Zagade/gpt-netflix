import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptPage: false,
        movieDetails: null,
        movieNames: null
    },
    reducers: {
        toggleShowGptPage: (state, action) => {
            state.showGptPage = !state.showGptPage;
        },
        addRecommendedMovies: (state, action) => {
            state.movieNames = action.payload.moviesNames;
            state.movieDetails = action.payload.moviesDetails;
        }
    }
})

export const { toggleShowGptPage, addRecommendedMovies } = gptSlice.actions;
export default gptSlice.reducer;