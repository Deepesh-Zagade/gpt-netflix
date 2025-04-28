import { useSelector } from "react-redux"
import lang from '../../utils/languageConstants'

const GptSearchBar = () => {
    const language = useSelector(store => store.config.language)
    return (
        <div className="pt-[10%]">
            <form className="bg-black py-20 grid grid-cols-12">
                <input
                    className="col-span-8 col-start-2 my-2 p-4 rounded-l-lg"
                    type='text'
                    placeholder={lang[language].gptSearchBarPlaceholder}
                    name='gpt-search'
                />
                <button className="col-span-2 col-end-12 my-2 p-4 rounded-r-lg cursor-pointer bg-red-700 hover:bg-red-800 text-white font-bold rounded-sm" >Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar