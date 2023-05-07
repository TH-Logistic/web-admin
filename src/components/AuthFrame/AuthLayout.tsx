import AuthImage from '../../assets/auth-image.svg';
import './AuthLayout.css'
import Logo from '../../assets/logo.svg';
import { Outlet } from 'react-router-dom';


export default function AuthLayout() {
    return (
        <div>
            <div className='flex items-center justify-center w-screen h-screen bg-gradient-to-br from-secondary-color/80 to-primary-color'>
                <div className='flex flex-col items-center w-5/6 bg-white rounded-md h-5/6' id='auth-background-white'>
                    <img src={Logo} alt="Logo" className='mt-12' />

                    <div className='flex flex-col items-center w-full h-full mt-1/12 sm:items-start'>
                        <div className='w-full px-16 mt-8 sm:pl-8 sm:w-1/3'>
                            <Outlet />
                        </div>
                    </div>


                    <img src={AuthImage} alt="Background" className='absolute right-0 w-3/5 bottom-1/12 collapse sm:visible' id='auth-image' />

                </div>
            </div>
        </div>
    )
}