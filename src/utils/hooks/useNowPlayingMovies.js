// Package Imports
import { useEffect } from "react"
import { useDispatch } from "react-redux"

// Project Imports
import { API_OPTIONS } from "../Constants"
import { NOW_PLAYING_MOVIES } from "../ApiEndpoints"
import { addNowPlayingMovies } from "../reduxStateManagement/slices/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        nowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;