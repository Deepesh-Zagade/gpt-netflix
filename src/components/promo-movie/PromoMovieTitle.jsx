const PromoMovieTitle = ({ title, description }) => {
    return (
        <div className='pt-48 pl-16'>
            <h1 className='text-6xl font-bold mb-4'>{title}</h1>
            <p className='w-1/3 mb-4 text-lg'>{description}</p>
            <button className='bg-gray-300 rounded-md text-black py-3 px-4 w-32 cursor-pointer'>Play</button>
            <button className='bg-gray-300 rounded-md text-black py-3 px-4 w-32 ml-2 cursor-pointer'>More Info</button>
        </div>
    )
}

export default PromoMovieTitle