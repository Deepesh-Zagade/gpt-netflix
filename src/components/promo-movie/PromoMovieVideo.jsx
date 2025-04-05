// Package Imports
import { useSelector } from 'react-redux'

// Project Imports
import usePromoMovieVideo from '../../utils/hooks/usePromoMovieVideo'

const PromoMovieVideo = ({ movieId }) => {

  usePromoMovieVideo(movieId)
  const trailerVideo = useSelector(store => store?.movie?.promoMovieTrailer)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=lXPAE9I7Rx8psuhH&amp;controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      >
      </iframe>
    </div>
  )
}

export default PromoMovieVideo