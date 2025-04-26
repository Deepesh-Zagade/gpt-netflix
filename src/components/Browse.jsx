// Package Imports

// Project Imports
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import PromoMovieContainer from './promo-movie/PromoMovieContainer'
import MovieListsContainer from './movie-geners/MovieListsContainer'
import usePopularMovies from '../utils/hooks/usePopularMovies'
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  return (
    <>
      <Header />
      <PromoMovieContainer />
      <MovieListsContainer />
    </>
  )
}

export default Browse