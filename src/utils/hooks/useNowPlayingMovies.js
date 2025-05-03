// Package Imports
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Project Imports
import { API_OPTIONS } from "../Constants"
import { NOW_PLAYING_MOVIES } from "../ApiEndpoints"
import { addNowPlayingMovies } from "../reduxStateManagement/slices/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMoviesList = useSelector(store => store.movie.nowPlayingMovies)

    const nowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        !nowPlayingMoviesList && nowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;