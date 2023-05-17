import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Select from '../../components/Select/Select';
import { Gender, StaffRole } from '../../entities/staff';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Patterns from '../../utils/patterns';
import { useDialog } from '../../hooks/use-dialog';
import { useMutation } from '@tanstack/react-query';
import * as StaffService from '../../services/staff/staff-service';
import { CreateStaffRequest } from '../../services/staff/create-staff-request';
import { useNavigate } from 'react-router-dom';

type CreateStaffInput = CreateStaffRequest & {
    confirmPassword: string
}

export default function CreateStaffPage() {

    const navigate = useNavigate();
    const { showInfoDialog, hideDialog, showLoadingDialog } = useDialog();

    const { register, formState: { errors }, control, handleSubmit, setError, setValue } = useForm<CreateStaffInput>({
        defaultValues: {
            role: StaffRole.ADMIN,
            avatar: 'www.thinhlh.com'
        }
    });
    const createStaffMutation = useMutation({
        mutationFn: StaffService.createStaff
    });

    const onSubmit: SubmitHandler<CreateStaffInput> = (data) => {
        if (data.confirmPassword !== data.password) {
            setError('confirmPassword', {
                message: 'Confirm password does not match password!',
                type: 'value'
            });

            return
        }

        const { confirmPassword, ...payload } = data;
        payload.username = payload.phoneNumber;

        showLoadingDialog();

        createStaffMutation.mutate(payload, {
            onError: (err) => {
                showInfoDialog({ success: false, message: err?.toString() });
            },
            onSuccess: (data) => {
                hideDialog();
                navigate(-1)
            },

        })
    }

    return (
        <CreatePage
            header='Create new staff'
            title="Add staff' s information"
            onPrimaryButtonClicked={handleSubmit(onSubmit)}
        >
            <form className='flex flex-col gap-4'>
                <Input
                    register={
                        register('name', {
                            required: {
                                value: true,
                                message: 'Staff name must not be empty!'
                            }
                        })
                    }
                    error={errors.name}
                    label='Staff name'
                    placeholder='Staff name'
                />

                <Controller
                    control={control}
                    name='gender'
                    rules={{
                        required: {
                            value: true,
                            message: "Staff's gender must not be empty"
                        }
                    }}

                    render={({ field }) =>

                        <Select.Root
                            label='Gender'
                            placeholder='Gender'
                            onValueChanged={(value) => setValue('gender', Gender[value as keyof typeof Gender])}
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
                        register('birthday', {
                            required: {
                                value: true,
                                message: 'Date of birth must not be empty!'
                            },
                            // pattern: {
                            //     value: Patterns.NUMBER_ONLY,
                            //     message: "Date of birth format is invalid!"
                            // },
                            max: {
                                value: new Date().getTime(),
                                message: "Date of birh must be in the past"
                            },
                            min: {
                                value: 1,
                                message: "Date of birh is invalid!"
                            },
                            valueAsNumber: true,
                        })
                    }
                    type='number'
                    error={errors.birthday}
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