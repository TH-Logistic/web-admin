import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { useForm } from 'react-hook-form';
import Patterns from "../../utils/patterns";

export default function ForgotPasswordPage() {
    const [isSubmittedEmail, setIsSubmittedEmail] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();


    function onSubmit(data: { email: string }) {
        setIsSubmittedEmail(true)

        setTimeout(() => {
            setIsSubmittedEmail(false)
        }, 5000)
    }

    return (
        <form className='flex flex-col items-center justify-center w-full h-full gap-8' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-medium text-center text-primary-color'>FORGOT PASSWORD</h1>
            <p className="w-2/3 text-center text-l">{isSubmittedEmail ? `Please check your email` : `Please enter yout email to request a password reset.`} </p>
            <Input
                placeholder="Email"
                register={
                    register('email', {
                        required: {
                            value: true,
                            message: 'Email must be not be empty'
                        },
                        pattern: {
                            value: Patterns.EMAIL,
                            message: 'Email must be valid'
                        },
                    })}
                type="email"
                error={errors.email}
            />
            <button className='w-full px-4 py-2 rounded-md bg-primary-color disabled:bg-disabled-color ' type="submit" disabled={isSubmittedEmail}>
                <p className='text-[#ffffff] font-semibold text-l'>RESET PASSWORD</p>
            </button>
            <p>Back to <Link to={'/auth'}><span className='font-semibold text-primary-color'>Login</span></Link></p>
        </form>
    );
}