import { MOVIE_POSTER_CDN } from "../../utils/CdnUrls";

const MovieCard = ({ details }) => {
    return (
        <div className=" pr-4 w-48">
            <img className="" src={MOVIE_POSTER_CDN + details.poster_path} alt={details.title} />
        </div>
    )
}

export default MovieCard;