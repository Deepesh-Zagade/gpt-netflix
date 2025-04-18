// Package Imports
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Project Imports
import { LOGO } from '../utils/CdnUrls'
import { auth } from '../utils/fireBase';
import { addUser, removeUser } from '../utils/reduxStateManagement/slices/userSlice';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
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
        <div className='px-40 py-5 absolute bg-gradient-to-b from-black/70 z-10 flex'>
            <div className='rounded-full'>
                <img className='w-[12%]' src={LOGO} alt="logo" />
            </div>
            {user &&
                <div className='flex p-4'>
                    <img className='w-10 h-10' src={user.photoURL} />
                    <button
                        onClick={handleSignOut}
                        className='mx-5 p-2 cursor-pointer bg-red-600 text-white font-bold rounded-sm'
                    >
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header