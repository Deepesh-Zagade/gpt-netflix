import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        promoMovieTrailer: null,
        popularMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPromoMovieTrailer: (state, action) => {
            state.promoMovieTrailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
    }
})

export const { addNowPlayingMovies, addPromoMovieTrailer, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;