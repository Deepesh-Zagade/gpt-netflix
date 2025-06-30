// Package Imports
import { useDispatch } from 'react-redux'
import React, { useState, useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

// Project Imports
import Header from './Header'
import { auth } from '../utils/fireBase'
import validateSigninForm from '../utils/validateSigninForm'
import { LOGIN_BACKGROUND, USER_IMG } from '../utils/CdnUrls'
import { addUser } from '../utils/reduxStateManagement/slices/userSlice'

const Login = () => {

    const dispatch = useDispatch()

    const [isSigninForm, setIsSigninForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const fullName = useRef(null)
    const password = useRef(null)

    const formToggler = () => {
        setIsSigninForm(!isSigninForm)
    }

    const formSubmitHandler = () => {
        // Validation

        const fullNameValue = isSigninForm ? undefined : fullName?.current?.value
        const validationMessage = validateSigninForm(email.current.value, password.current.value, fullNameValue)
        setErrorMessage(validationMessage)

        if (validationMessage) return

        // Authentication

        if (!isSigninForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // Updating Profile
                    updateProfile(user, {
                        displayName: fullNameValue, photoURL: USER_IMG
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser(
                            { uid, email, displayName, photoURL }
                        ))
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log("signIn:::user:::", user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }
    }

    return (
        <>
            <Header />
            <div className='absolute'>
                <img className='' src={LOGIN_BACKGROUND} alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='bg-black opacity-90 px-16 py-12 text-white rounded-lg w-3/12 mx-auto my-40 absolute top-0 right-0 left-0'>
                <div className='mt-4'>
                    <h1 className='pb-3  text-3xl font-bold'>Sign {isSigninForm ? 'In' : 'Up'}</h1>
                </div>
                {!isSigninForm &&
                    <input
                        type='text'
                        ref={fullName}
                        placeholder='Full Name'
                        className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                    />
                }
                <input
                    type='text'
                    ref={email}
                    placeholder='Email'
                    className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                />
                {errorMessage &&
                    <p className='mt-2 font-bold text-red-600'>{errorMessage}</p>
                }
                <button
                    onClick={formSubmitHandler}
                    className='my-5 px-4 py-2 rounded-sm w-full cursor-pointer bg-red-700 '
                >
                    Sign {isSigninForm ? 'In' : 'Up'}
                </button>
                <div>
                    <p className='text-stone-500 font-bold'>{isSigninForm ? 'New to Netflix?' : 'Already have an account?'}{' '}
                        <span
                            className='text-stone-300 font-bold cursor-pointer'
                            onClick={formToggler}
                        >
                            Sign {isSigninForm ? 'Up' : 'in'} now.
                        </span>
                    </p>
                </div>
            </form>
        </>
    )
}

export default Login