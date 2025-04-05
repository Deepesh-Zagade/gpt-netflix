// Package Imports
import { useSelector } from 'react-redux'

// Project Imports
import PromoMovieTitle from './PromoMovieTitle'
import PromoMovieVideo from './PromoMovieVideo'

const PromoMovieContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    if (!movies) return;

    const { original_title, overview, id } = movies[0]

    return (
        <>
            <PromoMovieTitle title={original_title} description={overview} />
            <PromoMovieVideo movieId={id} />
        </>
    )
}

export default PromoMovieContainer