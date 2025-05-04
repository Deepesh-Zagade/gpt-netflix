// Package Imports
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Project Imports
import { LOGO } from '../utils/CdnUrls'
import { auth } from '../utils/fireBase';
import { addUser, removeUser } from '../utils/reduxStateManagement/slices/userSlice';
import { toggleShowGptPage } from '../utils/reduxStateManagement/slices/gptSlice';
import { languageOptions } from '../utils/Constants';
import { setLanguage } from '../utils/reduxStateManagement/slices/configSlice';
import lang from '../utils/languageConstants';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((store) => store.user)
    const showGptPage = useSelector(store => store.gpt.showGptPage)
    const language = useSelector(store => store.config.language)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }

    const handleGptClick = () => {
        dispatch(toggleShowGptPage())
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser(
                    { uid, email, displayName, photoURL }
                ))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
        return () => unsubscribe()
    }, [])

    return (
        <div className='px-6 absolute bg-gradient-to-b from-black/70 z-10 flex flex-col md:flex-row justify-between'>
            <img className='m-auto md:m-0 w-[30%] md:w-[12%]' src={LOGO} alt="logo" />
            {user &&
                <div className='flex gap-5 items-center justify-center'>
                    {showGptPage &&
                        <select
                            name="language"
                            className='px-2 md:px-4 py-1 md:py-2 text-xs md:text-lg rounded-sm bg-red-700 text-white font-bold'
                            onChange={(e) => dispatch(setLanguage(e.target.value))}
                        >
                            {languageOptions.map((language, index) => {
                                return (
                                    <option key={language.code} value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>
                    }
                    <button
                        className='m-2 md:mr-8 text-xs md:text-lg p-1 md:p-2 bg-gray-200 hover:bg-gray-400 hover:text-red-900 cursor-pointer rounded-sm text-red-800 font-bold'
                        onClick={handleGptClick}
                    >{showGptPage ? lang[language].homePage : 'GPT Search'}</button>
                    <img className='w-5 md:w-10 h-5 md:h-10' src={user.photoURL} />
                    <button
                        onClick={handleSignOut}
                        className='px-2 md:px-4 py-1 md:py-2 text-xs md:text-lg cursor-pointer bg-red-700 text-white font-bold rounded-sm'
                    >
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header