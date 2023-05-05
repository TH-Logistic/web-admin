import { Link, useNavigate } from "react-router-dom";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { Input } from "../../components/Input/Input";
import { useMutation } from "@tanstack/react-query";
import * as AuthService from '../../services/auth/auth-service';
import { useAppDispatch } from "../../hooks/redux-hook";
import { idle, loading, success } from "../../stores/api-state";
import { ROUTES } from "../../routes/routes";

export default function AuthPage() {

    const navigate = useNavigate();
    const apiDispatch = useAppDispatch();

    const loginMutation = useMutation({
        mutationFn: AuthService.login,
    });

    const onLoginClicked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const request = Object.fromEntries(new FormData(e.currentTarget));

        apiDispatch(loading())

        loginMutation.mutate({
            phoneNumber: request.phoneNumber.toString(),
            password: request.password.toString()
        }, {
            onSuccess: () => {
                navigate(ROUTES.HOME.subroutes?.ORDERS.path ?? '/')
            },
            onSettled: () => {
                apiDispatch(idle())
            }
        });

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