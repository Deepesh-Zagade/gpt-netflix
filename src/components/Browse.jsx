// Package Imports

// Project Imports
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import PromoMovieContainer from './promo-movie/PromoMovieContainer'
import MovieListsContainer from './movie-geners/MovieListsContainer'
import usePopularMovies from '../utils/hooks/usePopularMovies'
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies'
import { useSelector } from 'react-redux'
import GptSearchPage from './gpt-search-page/GptSearchPage'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  const showGptPage = useSelector(store => store.gpt.showGptPage)

  return (
    <>
      <Header />
      {showGptPage ?
        <GptSearchPage /> :
        <>
          <PromoMovieContainer />
          <MovieListsContainer />
        </>
      }
    </>
  )
}

export default Browse