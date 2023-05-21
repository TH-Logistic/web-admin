import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import React from "react";

interface InputPropsInterface {
    error?: FieldError;
    register?: UseFormRegisterReturn;
    label?: string;
    centerLabel?: boolean;
    thoundsandSeparator?: boolean;
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
    centerLabel = false,
    error,
    thoundsandSeparator = false,
    ...props
}: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={`flex flex-row w-full gap-4 ${centerLabel ? 'items-center' : ''}`}>
            {children}
            {label && <label className='basis-1/5'>{label}</label>}
            <div className="flex flex-col w-full gap-2">
                <input
                    className={`px-4 py-2 outline-none border placeholder:text-caption border-border-color rounded-md ${error ? 'border-error-color' : 'border-border-color'} ${className}`}
                    ref={ref}
                    {...props}
                    {...register}
                />
                {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
            </div>
        </div>
    );
});
