//Package Imports

//Project Imports
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BACKGROUND } from "../../utils/CdnUrls";
import GptRecommendedContent from "./GptRecommendedContent";

const GptSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img className='' src={LOGIN_BACKGROUND} alt="background" />
            </div>
            <GptSearchBar />
            <GptRecommendedContent />
        </div>
    )
}

export default GptSearchPage;