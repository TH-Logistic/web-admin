import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Select from '../../components/Select/Select';
import { Gender } from '../../entities/staff';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Patterns from '../../utils/patterns';
import { useDialog } from '../../hooks/use-dialog';

type CreateDriverInput = {
    name: string;
    gender: Gender;
    dateOfBirth: number;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    bankName: string;
    bankAccount: string;
}

export default function CreateDriverPage() {

    const { showInfoDialog, hideDialog, showLoadingDialog } = useDialog();


    const { register, formState: { errors }, control, handleSubmit, setError, setValue } = useForm<CreateDriverInput>();

    const onSubmit: SubmitHandler<CreateDriverInput> = (data) => {

        console.log(data)

        if (data.confirmPassword !== data.password) {
            setError('confirmPassword', {
                message: 'Confirm password does not match password!',
                type: 'value'
            });

            return
        }


        const { confirmPassword, ...payload } = data;

        console.log(payload)
    }

    return (
        <CreatePage
            header='Create new driver'
            title="Add driver' s information"
            onPrimaryButtonClicked={handleSubmit(onSubmit)}
        >
            <form className='flex flex-col gap-4'>
                <Input
                    register={
                        register('name', {
                            required: {
                                value: true,
                                message: 'Driver name must not be empty!'
                            }
                        })
                    }
                    error={errors.name}
                    label='Driver name'
                    placeholder='Driver name'
                />

                <Controller
                    control={control}
                    name='gender'
                    rules={{
                        required: {
                            value: true,
                            message: "Driver's gender must not be empty"
                        }
                    }}

                    render={({ field }) =>

                        <Select.Root
                            label='Gender'
                            placeholder='Gender'
                            onValueChanged={(value) => setValue('gender', value as Gender)}
                            {...field}
                        >
                            {
                                Object
                                    .keys(Gender)
                                    .filter(i => isNaN(Number(i)))
                                    .map(value =>
                                        <Select.Item key={value} value={value}>
                                            <Select.ItemText>
                                                {value}
                                            </Select.ItemText>
                                        </Select.Item>
                                    )
                            }
                        </Select.Root>
                    }
                />



                <Input
                    register={
                        register('dateOfBirth', {
                            required: {
                                value: true,
                                message: 'Date of birth must not be empty!'
                            },
                            pattern: {
                                value: Patterns.NUMBER_ONLY,
                                message: "Date of birth format is invalid!"
                            },
                            max: {
                                value: new Date().getTime(),
                                message: "Date of birh must be in the past"
                            },
                            min: {
                                value: 1,
                                message: "Date of birh is invalid!"
                            }
                        })
                    }
                    error={errors.dateOfBirth}
                    label='Date of birth'
                    placeholder='Date of birth'
                />

                <Input
                    register={
                        register('email', {
                            required: {
                                value: true,
                                message: 'Email must not be empty!'
                            },
                            pattern: {
                                value: Patterns.EMAIL,
                                message: "Email format is invalid!"
                            },
                        })
                    }
                    error={errors.email}
                    label='Email'
                    placeholder='Email'
                    type='email'
                />

                <Input
                    register={
                        register('phoneNumber', {
                            required: {
                                value: true,
                                message: 'Phone number not be empty!'
                            },
                            pattern: {
                                value: Patterns.NUMBER_ONLY,
                                message: "Phone number is invalid!"
                            },
                        })
                    }
                    error={errors.phoneNumber}
                    label='Phone number'
                    placeholder='Phone number'
                    type='tel'
                />

                <Input
                    register={
                        register('password', {
                            required: {
                                value: true,
                                message: 'Password must not be empty!'
                            },
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 letters"
                            }
                        })
                    }
                    error={errors.password}
                    label='Password'
                    placeholder='Password'
                    type='password'
                />

                <Input
                    register={
                        register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'Confirm password must not be empty!'
                            },
                            minLength: {
                                value: 8,
                                message: "Confirm password must have at least 8 letters"
                            },
                        })
                    }
                    error={errors.confirmPassword}
                    label='Confirm password'
                    placeholder='Confirm password'
                    type='password'
                />

                <Input
                    register={
                        register('bankName', {
                            required: {
                                value: true,
                                message: 'Bank name must not be empty!'
                            },
                        })
                    }
                    error={errors.bankName}
                    label='Bank name'
                    placeholder='Bank name'
                />

                <Input
                    register={
                        register('bankAccount', {
                            required: {
                                value: true,
                                message: 'Bank account must not be empty!'
                            },
                            pattern: {
                                value: Patterns.NUMBER_ONLY,
                                message: 'Bank account must contains digits only!'
                            }
                        })
                    }
                    error={errors.bankAccount}
                    label='Bank account'
                    placeholder='Bank account'
                />
            </form>
        </CreatePage>
    )
}   