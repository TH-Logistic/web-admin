import { useForm, SubmitHandler, Controller, FieldError, ControllerRenderProps } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import { OrganizationType, ProviderType } from '../../entities/organization';
import Patterns from '../../utils/patterns';
import * as RadixSelect from '@radix-ui/react-select';
import { Select, SelectItem } from '../../components/Select/Select';

type CreateOrganizationInputs = {
    name: string;
    creditCard: string;
    contactName: string;
    contactNumber: string;
    type: OrganizationType;
    providerType?: ProviderType;
}

export default function CreateOrganizationPage() {

    const { register, formState: { errors }, control, handleSubmit, setValue } = useForm<CreateOrganizationInputs>();

    const onSubmit: SubmitHandler<CreateOrganizationInputs> = (data) => {

    }

    return (
        <CreatePage
            header='Create new organization'
            title="Add organization' s information"
            onPrimaryButtonClicked={handleSubmit(onSubmit)}
        >
            <form className='flex flex-col gap-4'>
                <Input
                    label='Name'
                    placeholder='Organization name'
                    register={register('name', {
                        required: {
                            value: true,
                            message: "Organization name can not be empty!"
                        }
                    })}
                    error={errors.name}
                />

                <Input
                    label='Credit card'
                    placeholder='Credit card number'
                    type='tel'
                    register={register('creditCard', {
                        required: {
                            value: true,
                            message: "Credit card number can not be empty!"
                        },
                        pattern: {
                            value: Patterns.NUMBER_ONLY,
                            message: 'Credit card must contains digits only!'
                        },
                    })}
                    error={errors.creditCard}
                />

                <Input
                    label='Contact name'
                    placeholder='Contact name'
                    register={register('contactName', {
                        required: {
                            value: true,
                            message: "Contact name can not be empty!"
                        },
                    })}
                    error={errors.contactName}
                />

                <Input
                    label='Contact number'
                    placeholder='Contact number'
                    register={register('contactNumber', {
                        required: {
                            value: true,
                            message: "Contact number can not be empty!"
                        },
                        pattern: {
                            value: Patterns.NUMBER_ONLY,
                            message: "Contact number must contains digits only!"
                        }
                    })}
                    error={errors.contactNumber}
                />

                <Controller
                    name='type'
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Organization type cannot be empty!',
                        }
                    }}
                    render={({ field }) =>
                        <Select
                            label='Type'
                            placeholder='Organization type'
                            error={errors.type}
                            // error={errors.type}
                            onValueChanged={(value) => setValue('type', OrganizationType.fromValueString(value))}
                            {...field}
                        >
                            {
                                Object
                                    .keys(OrganizationType)
                                    .filter(i =>
                                        isNaN(Number(i)) &&
                                        !(OrganizationType[i as keyof typeof OrganizationType] instanceof Function)
                                    )
                                    .map(value =>
                                        <SelectItem value={value} />
                                    )
                            }
                        </Select>
                    }
                />


                <div className='flex items-center'>
                    <label htmlFor='organization-name' className='mr-4 basis-1/6'>Organization name</label>
                    <input type='text' name='organization-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Organization name' />
                </div>
            </form>
        </CreatePage>
    )
}

// type SelectOrganizationTypeProps = {
//     onValueChanged?: (value: OrganizationType) => void,
//     error?: FieldError,
// } & ControllerRenderProps<CreateOrganizationInputs, 'type'>

// const SelectOrganizationType = ({
//     onValueChanged = undefined
// }: SelectOrganizationTypeProps) => {
//     return (
//         <div className='flex flex-row items-center gap-4'>
//             <label htmlFor='product-type' className='basis-1/5'>Product type</label>
//             <div className='flex flex-col w-full gap-2'>
//                 <RadixSelect.Root
//                     defaultValue={props.value.toString()}
//                     onValueChange={(value) => onValueChanged(ProductType[value as keyof typeof ProductType])}
//                     name='product-type'>
//                     <RadixSelect.Trigger
//                         className='w-full px-4 py-2 border rounded-md border-border-color' asChild>
//                         <div className='flex flex-row items-center justify-between'>
//                             <RadixSelect.Value
//                                 placeholder={
//                                     <p className='text-base text-caption'>Product type</p>
//                                 } />
//                             <RadixSelect.Icon asChild>
//                                 <img src={ArrowDown} alt='Product type' />
//                             </RadixSelect.Icon>
//                         </div>
//                     </RadixSelect.Trigger>

//                     <RadixSelect.Portal>
//                         <RadixSelect.Content className='overflow-hidden bg-white shadow-lg border border-border-color rounded-md w-[--radix-select-trigger-width] max-h-[30vh]' sideOffset={8} avoidCollisions={false} position='popper'>
//                             <RadixSelect.Viewport className='flex flex-col p-2'>
//                                 {
//                                     Object
//                                         .keys(ProductType)
//                                         .filter(key => isNaN(Number(key)))
//                                         .map(key => <SelectItem key={key} value={key} />)
//                                 }
//                             </RadixSelect.Viewport>
//                         </RadixSelect.Content>
//                     </RadixSelect.Portal>
//                 </RadixSelect.Root>

//                 {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
//             </div>
//         </div>
//     )
// }