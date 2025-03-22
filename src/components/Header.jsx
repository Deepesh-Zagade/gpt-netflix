import React from 'react'
import { LOGO } from '../utils/CdnUrls'

const Header = () => {
    return (
        <div className='px-40 py-5 absolute bg-gradient-to-b from-black z-10'>
            <img className='w-[12%]' src={LOGO} alt="logo" />
        </div>
    )
}

export default Header