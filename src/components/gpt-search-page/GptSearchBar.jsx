// Package Imports
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

// Project Imports
import lang from '../../utils/languageConstants'
import ai from '../../utils/genAi'
import { SEARCH_MOVIE } from "../../utils/ApiEndpoints"
import { API_OPTIONS, improvisedPrompt } from "../../utils/Constants"
import { addRecommendedMovies } from "../../utils/reduxStateManagement/slices/gptSlice"

const GptSearchBar = () => {
    const language = useSelector(store => store.config.language)
    const inputRef = useRef()
    const dispatch = useDispatch()

    const searchMovieInTmdb = async (movie) => {
        const response = await fetch(`${SEARCH_MOVIE}${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        const { results } = await response.json()
        return results;
    }

    const inputSearchHandler = async () => {
        const prompt = `${improvisedPrompt}${inputRef.current.value}`
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        const cleanedReponse = response.candidates[0].content.parts[0].text.trim().replace(/'/g, '"');
        const recomendedMovies = JSON.parse(cleanedReponse)

        const promisedArray = recomendedMovies.map((movie) => searchMovieInTmdb(movie))
        const moviesDetails = await Promise.all(promisedArray)

        dispatch(addRecommendedMovies({ moviesNames: recomendedMovies, moviesDetails: moviesDetails }))
    }

    return (
        <div className="pt-[10%]">
            <form className="bg-black opacity-[95%] py-20 w-[80%] m-auto grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="col-span-8 col-start-2 my-2 p-4 rounded-l-lg"
                    type='text'
                    placeholder={lang[language].gptSearchBarPlaceholder}
                    name='gpt-search'
                    ref={inputRef}
                />
                <button
                    className="col-span-2 col-end-12 my-2 p-4 rounded-r-lg cursor-pointer bg-red-700 hover:bg-red-800 text-white font-bold rounded-sm"
                    onClick={inputSearchHandler}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar