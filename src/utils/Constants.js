export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmM3MjU4NTQxM2VlNjY1NWYyNWViYjBiNmI2YzkxNSIsIm5iZiI6MTc0MzIzODQ4OS4yNjksInN1YiI6IjY3ZTdiNTU5NmIzNjdkNDY5NTY3YjIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfr4reBLDPg6SVyRmC6Ybgz_Kfty5VO-WJrSGHNYelU'
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
export const GENAI_KEY = 'AIzaSyAfevheXquisw4wX5aCA_n-gF6Wkl9x9d8'
export const improvisedPrompt = `act like a movie recommendation system and according to the given text evaluate the movies and give response for 5 movies in array format like this, ['movieName1','movieName2',movieName3'...], only give array in response and no other description strictly only array like this ['movieName1','movieName2',movieName3','movieName4','movieName5']. text - `