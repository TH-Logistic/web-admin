import AuthImage from '../../assets/auth-image.svg';
import './AuthLayout.css'
import Logo from '../../assets/logo.svg';
import { Outlet } from 'react-router-dom';


export default function AuthLayout() {
    return (
        <div>
            <div className='flex items-center justify-center w-screen h-screen bg-gradient-to-br from-secondary-color/80 to-primary-color'>
                <div className='relative flex items-start w-5/6 bg-white rounded-md h-5/6' id='auth-background-white'>
                    <div className='absolute flex flex-row justify-center w-full px-4 top-8'>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className='absolute top-[50%] left-1/2 -translate-x-1/2 m-0 w-8/12 sm:w-1/4 sm:left-0 sm:translate-x-0 sm:ml-8 -translate-y-1/2'>
                        <Outlet />
                    </div>
                </div>
                <img src={AuthImage} alt="Background" className='absolute right-0 w-3/5 bottom-1/12 collapse sm:visible' id='auth-image' />
            </div>
        </div>
    )
}