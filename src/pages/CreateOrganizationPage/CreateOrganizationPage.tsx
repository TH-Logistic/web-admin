import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import { OrganizationType, ProviderType, getOrganizationTypeValue, getProviderTypeValue } from '../../entities/organization';
import Patterns from '../../utils/patterns';
import * as Select from '../../components/Select/Select';
import { useMutation } from '@tanstack/react-query';
import * as OrganizationService from '../../services/organization/organization-service';
import { useDialog } from '../../hooks/use-dialog';
import { useNavigate } from 'react-router-dom';

type CreateOrganizationInputs = {
    name: string;
    creditCard: string;
    contactName: string;
    contactNumber: string;
    type: OrganizationType;
    providerType?: ProviderType;
}

export default function CreateOrganizationPage() {
    const navigate = useNavigate();
    const { showLoadingDialog, showInfoDialog, hideDialog } = useDialog();
    const { register, watch, formState: { errors }, control, handleSubmit, setValue, getValues } = useForm<CreateOrganizationInputs>();

    const watchOrganizationType = watch('type');

    const createOrganizationMutation = useMutation({
        mutationFn: OrganizationService.createOrganization,
    });

    const onSubmit: SubmitHandler<CreateOrganizationInputs> = (data) => {
        showLoadingDialog()

        createOrganizationMutation.mutate(data, {
            onSuccess: () => {
                hideDialog()
                navigate(-1)
            },
            onError: (error) => {
                showInfoDialog({ success: false, message: error?.toString() })
            }
        })
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
                        <Select.Root
                            {...field}
                            label='Type'
                            placeholder='Organization type'
                            error={errors.type}
                            onValueChanged={(value) => setValue('type', OrganizationType[value as keyof typeof OrganizationType])}
                        >
                            {
                                Object
                                    .keys(OrganizationType)
                                    .filter(i => isNaN(Number(i)))
                                    .map(value =>
                                        <Select.Item key={value} value={value}>
                                            <Select.ItemText>
                                                {getOrganizationTypeValue(OrganizationType[value as keyof typeof OrganizationType])}
                                            </Select.ItemText>
                                        </Select.Item>
                                    )
                            }
                        </Select.Root>
                    }
                />

                {
                    (watchOrganizationType === OrganizationType.PROVIDER) &&
                    <Controller
                        name='providerType'
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Provider type is required!'
                            }
                        }}
                        render={({ field }) =>
                            <Select.Root
                                {...field}
                                label='Provider type'
                                placeholder='Provider type'
                                error={errors.providerType}
                                onValueChanged={(value) => setValue('providerType', ProviderType[value as keyof typeof ProviderType])}
                            >
                                {
                                    Object
                                        .keys(ProviderType)
                                        .filter(i => isNaN(Number(i)))
                                        .map(value => {
                                            const providerTypeValue = ProviderType[value as keyof typeof ProviderType]
                                            return (
                                                <Select.Item
                                                    key={value}
                                                    value={value}
                                                >
                                                    <Select.ItemText>
                                                        {getProviderTypeValue(providerTypeValue)}
                                                    </Select.ItemText>
                                                </Select.Item>
                                            )
                                        }

                                        )
                                }
                            </Select.Root>
                        }
                    />
                }
            </form>
        </CreatePage>
    )
}