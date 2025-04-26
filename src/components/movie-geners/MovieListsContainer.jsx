//Package Imports

//Project Imports
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieListsContainer = () => {

  const movies = useSelector(store => store.movie)

  return (
    <div className='bg-black -mt-80 relative z-20 w-screen'>
      <MovieList title='Now Playing Movies' data={movies.nowPlayingMovies} />
      <MovieList title='Top Rated Movies' data={movies.topRatedMovies} />
      <MovieList title='Popular Movies' data={movies.popularMovies} />
    </div>
  )
}

export default MovieListsContainer