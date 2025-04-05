// Package Imports

// Project Imports
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import PromoMovieContainer from './promo-movie/PromoMovieContainer'
import MovieListsContainer from './movie-geners/MovieListsContainer'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <>
      <Header />
      <PromoMovieContainer />
      <MovieListsContainer />
    </>
  )
}

export default Browse