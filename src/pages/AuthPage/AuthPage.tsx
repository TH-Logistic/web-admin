import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as Form from "@radix-ui/react-form";
import { Input } from "../../components/Input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as AuthService from '../../services/auth/auth-service';
import { useAppDispatch } from "../../hooks/redux-hook";
import { idle, loading, success } from "../../stores/api-state";
import { ROUTES } from "../../routes/routes";
import { useDialog } from "../../hooks/use-dialog";
import { ApiError } from "../../errors/ApiError";

type AuthInputs = {
    phoneNumber: string;
    password: string;
}

export default function AuthPage() {

    const navigate = useNavigate();
    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();
    const { register, formState: { errors }, handleSubmit } = useForm<AuthInputs>();

    const loginMutation = useMutation({
        mutationFn: AuthService.login,
    });

    const onSubmit: SubmitHandler<AuthInputs> = (data) => {
        showLoadingDialog()

        loginMutation.mutate({
            phoneNumber: data.phoneNumber?.toString(),
            password: data.password?.toString()
        }, {
            onSuccess: () => {
                hideDialog()
                navigate(ROUTES.HOME.subroutes?.ORDERS.path ?? '/')
            },
            onError: (err) => {
                showInfoDialog({
                    message: err?.toString(),
                    success: false,
                })
            }
        });
    }

    return (
        <Form.Root className='flex flex-col items-center w-full h-full gap-4' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl font-bold lg:text-4xl text-primary-color'>LOGIN</h1>
            <div className="flex flex-col items-center w-full gap-4">
                <Input
                    register={register('phoneNumber', {
                        required: {
                            value: true,
                            message: 'Phone number must not be empty!'
                        },
                        minLength: {
                            value: 9,
                            message: 'Phone number must have at least 9 digits'
                        },
                        maxLength: {
                            value: 15,
                            message: 'Phone number must have less than 15 digits'
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Phone number must contains only digits'
                        }
                    })}
                    error={errors.phoneNumber}
                    placeholder="Phone Number"
                    type="tel"
                />

                <Input
                    register={register('password', {
                        required: {
                            value: true,
                            message: 'Password must not be empty!'
                        }
                    })}
                    error={errors.password}
                    placeholder="Password"
                    type="password"
                />

                <button className='w-full px-4 py-2 rounded-md bg-primary-color'>
                    <p className='text-[#ffffff] font-semibold text-xl'>LOG IN</p>
                </button>
                <p>Forgot password? <Link to="/auth/forgot-password"><b className='font-bold text-primary-color'>Click here</b></Link></p>

            </div>
        </Form.Root>
    );
}