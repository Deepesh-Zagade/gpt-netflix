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
        <div className='px-6 absolute bg-gradient-to-b from-black/70 z-10 flex justify-between'>
            <img className='w-[12%]' src={LOGO} alt="logo" />
            {user &&
                <div className='flex gap-5 items-center'>
                    <img className='w-10 h-10' src={user.photoURL} />
                    <button
                        onClick={handleSignOut}
                        className='px-4 py-2 cursor-pointer bg-red-600 text-white font-bold rounded-sm'
                    >
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header