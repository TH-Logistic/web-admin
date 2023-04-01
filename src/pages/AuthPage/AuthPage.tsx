import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import React from "react";

export default function AuthPage() {

    const navigate = useNavigate()

    const onLoginClicked = (e: any) => {
        e.preventDefault()
        navigate(ROUTES.ORDERS.path)
    }

    return (
        <form className='flex flex-col items-center w-full h-full justify-evenly'>
            <h1 className='mt-8 text-4xl font-bold text-primary-color'>LOGIN</h1>
            <br />
            <input className='w-full px-4 py-2 rounded-md p text-l ring-1 ring-slate-300 ' placeholder='Email' type="email">
            </input>
            <br />
            <input className='w-full px-4 py-2 rounded-md text-l ring-1 ring-slate-300 ' type="password" placeholder='Password'></input>
            <br />
            <button className='w-full px-4 py-2 rounded-md bg-primary-color' onClick={onLoginClicked}>
                <p className='text-[#ffffff] font-semibold text-xl'>LOG IN</p>
            </button>
            <br />
            <p>Forgot password? <Link to="/forgot-password"><b className='font-bold text-primary-color'>Click here</b></Link></p>
        </form>
    );
}