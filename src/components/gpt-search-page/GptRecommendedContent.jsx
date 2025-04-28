//Package Imports
import { useSelector } from "react-redux";

//Project Imports
import MovieList from "../movie-geners/MovieList";

const GptRecommendedContent = () => {
    const { movieDetails, movieNames } = useSelector(store => store.gpt)
    if (!movieNames) return;
    return (

        <div className="bg-black p-4 m-4 opacity-[95%]">
            <div className="">
                {
                    movieNames?.map((movie, index) => {
                        return <MovieList key={movie} title={movie} data={movieDetails[index]} />
                    })
                }
            </div>
        </div>
    )
}
export default GptRecommendedContent;