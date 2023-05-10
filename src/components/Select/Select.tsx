import * as RadixSelect from '@radix-ui/react-select';
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import React from 'react';
import ArrowDown from '../../assets/arrow-down.svg';
import { pascalize } from 'humps';
import { OrganizationType } from '../../entities/organization';

type SelectProps = {
    onValueChanged?: (value: string) => void,
    error?: FieldError,
    label?: string,
    defaultValue?: string,
    placeholder?: string,
} & React.PropsWithChildren;

const Select = React.forwardRef(({
    onValueChanged,
    error,
    label,
    defaultValue,
    children,
    placeholder,
    ...props
}: SelectProps, ref) => {
    return (
        <div className='flex flex-row items-center gap-4'>
            {label && <label className='basis-1/5'>{label}</label>}
            <div className='flex flex-col w-full gap-2'>
                <RadixSelect.Root
                    defaultValue={defaultValue}
                    onValueChange={onValueChanged}
                >
                    <SelectTrigger placeholder={placeholder} />
                    <RadixSelect.Portal>
                        <SelectContent>
                            {children}
                        </SelectContent>
                    </RadixSelect.Portal>
                </RadixSelect.Root>

                {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
            </div>
        </div>
    );
})

type SelectItemProps = RadixSelect.SelectItemProps;
const SelectItem = ({ value, className }: SelectItemProps) => {
    return (
        <RadixSelect.Item
            value={value}
            className={`data-[highlighted]: outline-none font-semibold data-[highlighted]:bg-disabled-color py-2 px-4 rounded-md ${className}`}
        >
            <RadixSelect.ItemText >
                {OrganizationType[value as keyof typeof OrganizationType].toString()}
            </RadixSelect.ItemText>
        </RadixSelect.Item>
    )
}

type SelectContentProps = RadixSelect.SelectContentProps;
const SelectContent = ({
    className,
    children,
    ...props
}: SelectContentProps) => {
    return (
        <RadixSelect.Content
            className={`overflow-hidden bg-white shadow-lg border border-border-color rounded-md w-[--radix-select-trigger-width] max-h-[30vh] ${className}`}
            sideOffset={8}
            avoidCollisions={false}
            position='popper'
            {...props}
        >
            <RadixSelect.Viewport className='flex flex-col p-2'>
                {children}
            </RadixSelect.Viewport>
        </RadixSelect.Content>
    )
}

type SelectTriggerProps = RadixSelect.SelectTriggerProps & React.PropsWithChildren;
const SelectTrigger = ({
    className,
    placeholder,
    children,
    ...props
}: SelectTriggerProps) => {
    return (
        <RadixSelect.Trigger
            className={`w-full px-4 py-2 border rounded-md border-border-color ${className}`}
            {...props}
            asChild>
            {children ?
                children :
                <div className='flex flex-row items-center justify-between'>
                    <RadixSelect.Value
                        placeholder={
                            <p className='text-base text-caption'>{placeholder}</p>
                        } />
                    <RadixSelect.Icon asChild>
                        <img src={ArrowDown} alt='arrow down' />
                    </RadixSelect.Icon>
                </div>
            }

        </RadixSelect.Trigger>
    )
}
export { SelectContent, SelectItem, SelectTrigger, Select }