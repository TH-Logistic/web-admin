import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import React from "react";
import * as AuthService from "../../services/auth/auth-service";
import * as Form from "@radix-ui/react-form";
import { Input } from "../../components/Input/Input";
import { useMutation } from "@tanstack/react-query";

export default function AuthPage() {

    const navigate = useNavigate();

    const { mutate: login, data, isLoading } = useMutation({
        mutationFn: AuthService.login,
    });

    const onLoginClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const request = Object.fromEntries(new FormData(e.currentTarget));
        const response = login({
            phoneNumber: request.phoneNumber.toString(),
            password: request.password.toString()
        });

        // navigate(ROUTES.HOME.subroutes?.ORDERS.path ?? '/')
    }

    return (
        <Form.Root className='flex flex-col items-center w-full h-full justify-evenly' onSubmit={(e) => onLoginClicked(e)}>
            <h1 className='mt-8 text-2xl font-bold lg:text-4xl text-primary-color'>LOGIN</h1>
            <br />
            <div className="flex flex-col items-center w-full gap-4">
                <Input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    matchers={[{ match: 'valueMissing', message: 'Phone number cannot be empty!' }]}
                    type="tel"
                    required
                />

                <Input
                    name="password"
                    placeholder="Password"
                    matchers={[{ match: 'valueMissing', message: 'Password cannot be empty!' }]}
                    type="password"
                    required
                />
                <Form.Submit className='w-full px-4 py-2 rounded-md bg-primary-color'>
                    <p className='text-[#ffffff] font-semibold text-xl'>LOG IN</p>
                </Form.Submit>
                <p>Forgot password? <Link to="/auth/forgot-password"><b className='font-bold text-primary-color'>Click here</b></Link></p>

            </div>
        </Form.Root>
    );
}