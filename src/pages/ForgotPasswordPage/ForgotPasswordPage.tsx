import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {

    const [isSubmittedEmail, setIsSubmittedEmail] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setIsSubmittedEmail(true)

        setTimeout(() => {
            setIsSubmittedEmail(false)
        }, 5000)
    }

    return (
        <form className='flex flex-col items-center justify-center w-full h-full ' onSubmit={handleSubmit}>
            <h1 className='mt-8 text-3xl font-medium text-center text-primary-color'>FORGOT PASSWORD</h1>
            <br />
            <p className="w-2/3 text-center text-l">{isSubmittedEmail ? `Please check your email` : `Please enter yout email to request a password reset.`} </p>
            <br />
            <input className='w-full px-4 py-2 text-xl rounded-md ring-1 ring-slate-500' placeholder='Email' type="email" disabled={isSubmittedEmail} />
            <br />
            <button className='w-full px-4 py-2 rounded-md bg-primary-color disabled:bg-disabled-color ' type="submit" disabled={isSubmittedEmail}>
                <p className='text-[#ffffff] font-semibold text-l'>RESET PASSWORD</p>
            </button>
            <br />
            <p>Back to <Link to="/auth"><span className='font-semibold text-primary-color'>Login</span></Link></p>
        </form>
    );
}