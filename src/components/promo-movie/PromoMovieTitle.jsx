const PromoMovieTitle = ({ title, description }) => {
    return (
        <div className='pt-[15%] pl-3 md:pl-16 absolute text-white bg-gradient-to-r from-black/70 aspect-video'>
            <h1 className='text-3xl md:text-6xl font-bold mb-4'>{title}</h1>
            <p className='w-1/3 mb-3 md:mb-6 text-md md:text-lg'>{description}</p>
            <button className='bg-gray-100 hover:bg-gray-300 rounded-md text-black py-2 md:py-3 px-2 md:px-4 w-16 md:w-32 cursor-pointer'>Play</button>
            <button className='text-white font-bold bg-gray-700/50 hover:bg-black/75 rounded-md text-black py-3 px-4 w-32 ml-2 cursor-pointer'>More Info</button>
        </div>
    )
}

export default PromoMovieTitle