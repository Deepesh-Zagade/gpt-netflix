//Package Imports

//Project Imports
import MovieCard from './MovieCard'

const MovieList = ({ title, data }) => {
    if (!data) return
    return (
        <div className='pb-3 px-3 md:px-6'>
            <h1 className='p-2 md:p-4 text-lg md:text-3xl font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {
                        data?.map((item, index) => (
                            <MovieCard key={item.id} details={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;