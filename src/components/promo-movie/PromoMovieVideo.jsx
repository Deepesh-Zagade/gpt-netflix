// Package Imports
import { useSelector } from 'react-redux'

// Project Imports
import usePromoMovieVideo from '../../utils/hooks/usePromoMovieVideo'

const PromoMovieVideo = ({ movieId }) => {

  usePromoMovieVideo(movieId)
  const trailerVideo = useSelector(store => store?.movie?.promoMovieTrailer)

  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&si=lXPAE9I7Rx8psuhH&amp`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      >
      </iframe>
    </div>
  )
}

export default PromoMovieVideo