import { MOVIE_POSTER_CDN } from "../../utils/CdnUrls";

const MovieCard = ({ details }) => {
    if (!details.poster_path) return;
    return (
        <div className="pr-4 w-40 md:w-48">
            <img className="" src={MOVIE_POSTER_CDN + details.poster_path} alt={details.title} />
        </div>
    )
}

export default MovieCard;