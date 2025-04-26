//Package Imports

//Project Imports
import MovieCard from './MovieCard'

const MovieList = ({ title, data }) => {
    return (
        <div className='px-6'>
            <h1 className='p-4 text-3xl text-white'>{title}</h1>
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