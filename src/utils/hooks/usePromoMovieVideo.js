// Package Imports
import { useEffect } from "react"
import { useDispatch } from "react-redux"

// Project Imports
import { API_OPTIONS } from "../Constants"
import { addPromoMovieTrailer } from "../reduxStateManagement/slices/movieSlice"

const usePromoMovieVideo = (movieId) => {

    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
        // Api Call
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()

        // Filter the trailer
        const filteredData = json?.results?.filter(item => item.type === 'Trailer')
        const trailer = filteredData.length ? filteredData[0] : json.results[0]

        // Add trailer to Redux Store
        dispatch(addPromoMovieTrailer(trailer))
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])
}

export default usePromoMovieVideo;