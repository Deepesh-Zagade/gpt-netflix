// Package Imports
import { configureStore } from "@reduxjs/toolkit";

// Project Imports
import userReducer from './slices/userSlice'
import movieReducer from './slices/movieSlice'
import gptReducer from './slices/gptSlice'
import configReducer from './slices/configSlice'

const appStore = configureStore({
    reducer: {
        config: configReducer,
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
    }
})

export default appStore;