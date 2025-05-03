export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_AUTH_KEY
    }
};

export const languageOptions = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'hi',
        name: 'Hindi',
    },
    {
        code: 'mr',
        name: 'Marathi',
    },
    {
        code: 'es',
        name: 'Spanish'
    }
]
export const GENAI_KEY = import.meta.env.VITE_GENAI_KEY
export const improvisedPrompt = `act like a movie recommendation system and according to the given text evaluate the movies and give response for 5 movies in array format like this, ['movieName1','movieName2',movieName3'...], only give array in response and no other description strictly only array like this ['movieName1','movieName2',movieName3','movieName4','movieName5']. text - `