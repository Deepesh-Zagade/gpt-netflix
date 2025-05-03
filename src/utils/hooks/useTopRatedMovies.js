// Package Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Project Imports
import { API_OPTIONS } from "../Constants";
import { TOP_RATED_MOVIES } from "../ApiEndpoints";
import { addTopRatedMovies } from "../reduxStateManagement/slices/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    const topRatedMoviesList = useSelector(store => store.movie.topRatedMovies)

    const topRatedMovies = async () => {
        const response = await fetch(TOP_RATED_MOVIES, API_OPTIONS)
        const data = await response.json()
        dispatch(addTopRatedMovies(data.results))
    }

    useEffect(() => {
        !topRatedMoviesList && topRatedMovies()
    }, [])
}

export default useTopRatedMovies;