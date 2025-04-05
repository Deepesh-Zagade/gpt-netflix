import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        promoMovieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPromoMovieTrailer: (state, action) => {
            state.promoMovieTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addPromoMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;