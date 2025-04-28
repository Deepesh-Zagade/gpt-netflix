import { LOGIN_BACKGROUND } from "../../utils/CdnUrls";
import GptRecommendedContent from "./GptRecommendedContent";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img className='' src={LOGIN_BACKGROUND} alt="background" />
            </div>
            <GptSearchBar />
            <GptRecommendedContent />
        </div>
    )
}

export default GptSearchPage;