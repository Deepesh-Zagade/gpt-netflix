// Package Imports

// Project Imports
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <>
      <Header />
      <div className='absolute mt-20'>Browse</div>
    </>
  )
}

export default Browse