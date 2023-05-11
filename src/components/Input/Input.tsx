import { FieldError, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import * as Form from "@radix-ui/react-form";
import React from "react";
import { error } from 'console';

interface InputPropsInterface {
    error?: FieldError;
    register?: UseFormRegisterReturn;
    label?: string;
}

export type InputProps = InputPropsInterface & React.ComponentProps<'input'>;

/**
 * Component for taking user input
 */
export const Input = React.forwardRef(({
    children = undefined,
    className,
    register,
    label,
    error,
    ...props
}: InputProps, r) => {
    return (
        <div className='flex flex-row w-full gap-4'>
            {children}
            {label && <label className='basis-1/5'>{label}</label>}
            <div className="flex flex-col w-full gap-2">
                <input {...props}
                    {...register}
                    className={`px-4 py-2 outline-none border placeholder:text-caption border-border-color rounded-md ${error ? 'border-error-color' : 'border-border-color'} ${className}`}
                    {...props}
                />
                {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
            </div>
        </div>
    );
});
