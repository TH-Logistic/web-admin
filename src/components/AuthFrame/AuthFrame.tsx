import * as React from 'react';
import AuthImage from '../../assets/auth-image.svg';
import './AuthFrame.css'
import Logo from '../../assets/logo.svg';

export interface AuthFrameArg {
    child: JSX.Element
}

export default function AuthFrame({ child }: AuthFrameArg) {
    return (
        <div className='flex w-screen h-screen '>
            <div className='relative flex w-screen h-screen max-w-full max-h-full'>
                <div className='absolute flex items-center justify-center w-screen h-screen max-w-full max-h-full bg-gradient-to-br from-secondary-color/80 to-primary-color'>
                    <div className='absolute flex w-5/6 bg-white rounded-md h-5/6 ' id='auth-background-white'>
                        <div className='flex flex-col items-center w-2/5 px-16 py-1/12' >
                            <img src={Logo} alt="Logo" className='w-3/4' />
                            {child}
                        </div>
                    </div>
                </div>
                <img src={AuthImage} alt="Background" className='absolute right-0 w-3/5 bottom-1/12' id='auth-image' />
            </div>
        </div>
    )
}