// Package Imports
import React from 'react'

// Project Imports
import Header from './Header'
import { LOGIN_BACKGROUND } from '../utils/CdnUrls'
import { useState } from 'react'

const Login = () => {

    const [isSigninForm, setIsSigninForm] = useState(true)

    const formToggler = () => {
        setIsSigninForm(!isSigninForm)
    }

    return (
        <>
            <Header />
            <div className='absolute'>
                <img className='' src={LOGIN_BACKGROUND} alt="background" />
            </div>
            <form className='bg-black opacity-90 px-16 py-12 text-white rounded-lg w-3/12 mx-auto my-40 absolute top-0 right-0 left-0'>
                <div className='mt-4'>
                    <h1 className='pb-3  text-3xl font-bold'>Sign {isSigninForm ? 'In' : 'Up'}</h1>
                </div>
                {!isSigninForm &&
                    <input
                        className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                        type='text'
                        placeholder='Full Name'
                    />
                }
                <input
                    className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                    type='text'
                    placeholder='Email'
                />
                <input className='mt-4 p-4 placeholder-stone-300 rounded-sm w-full bg-stone-900 border border-stone-300'
                    type='password'
                    placeholder='Password'
                />
                <button className='my-5 px-4 py-2 rounded-sm w-full cursor-pointer bg-red-700 '>
                    Sign {isSigninForm ? 'In' : 'Up'}
                </button>
                <div>
                    <p className='text-stone-500 font-bold'>{isSigninForm ? 'New to Netflix?' : 'Already have an account?'}{' '}
                        <span
                            className='text-stone-300 font-bold cursor-pointer'
                            onClick={formToggler}
                        >
                            Sign {isSigninForm ? 'Up' : 'In'} now.
                        </span>
                    </p>
                </div>
            </form>
        </>
    )
}

export default Login