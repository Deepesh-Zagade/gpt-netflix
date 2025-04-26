// Package Imports
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Project Imports
import { API_OPTIONS } from "../Constants";
import { POPULAR_MOVIES } from "../ApiEndpoints";
import { addPopularMovies } from "../reduxStateManagement/slices/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const popularMovies = async () => {
        const response = await fetch(POPULAR_MOVIES, API_OPTIONS)
        const data = await response.json()
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        popularMovies()
    }, [])
}

export default usePopularMovies;