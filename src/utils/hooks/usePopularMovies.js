// Package Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Project Imports
import { API_OPTIONS } from "../Constants";
import { POPULAR_MOVIES } from "../ApiEndpoints";
import { addPopularMovies } from "../reduxStateManagement/slices/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const popularMoviesList = useSelector(store => store.movie.popularMovies)

    const popularMovies = async () => {
        const response = await fetch(POPULAR_MOVIES, API_OPTIONS)
        const data = await response.json()
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        !popularMoviesList && popularMovies()
    }, [])
}

export default usePopularMovies;