import { useForm, SubmitHandler } from 'react-hook-form';
import CreatePage from '../common/CreatePage/CreatePage';
import { Input } from '../../components/Input/Input';

type CreateTransportationInputs = {
    licensePlate: string;
    load: number;
    garage: string;
    mainDriver: string;
    coDriver?: string;
}

export default function CreateTransportationPage() {

    const { register, handleSubmit, formState: { errors } } = useForm<CreateTransportationInputs>();

    const onSubmit: SubmitHandler<CreateTransportationInputs> = (data: CreateTransportationInputs) => {

    }

    return (
        <CreatePage
            header='Create new truck'
            title="Add truck' s information"
            onPrimaryButtonClicked={() => {
                handleSubmit(onSubmit)();
            }}
        >
            <form className='flex flex-col gap-4'>
                <Input
                    placeholder='License plate'
                    register={register('licensePlate', {
                        required: {
                            value: true,
                            message: 'License plate can not be empty'
                        }
                    })}
                    type='text'
                    error={errors.licensePlate}
                    label='Truck name'
                />

                <Input
                    placeholder='Load'
                    register={register('load', {
                        required: {
                            value: true,
                            message: 'Load can not be empty'
                        },
                        min: {
                            value: 1,
                            message: ' Load must be larger than 1'
                        },
                        valueAsNumber: true,
                    })}
                    type='number'
                    error={errors.load}
                    label='Load'
                />

                <Input
                    placeholder='Main driver'
                    register={register('mainDriver', {
                        required: {
                            value: true,
                            message: 'Main Driver can not be empty'
                        },
                    })}
                    type='text'
                    error={errors.mainDriver}
                    label='Main Driver'
                />

                <Input
                    placeholder='Co-driver'
                    register={register('coDriver', {

                    })}
                    type='text'
                    error={errors.coDriver}
                    label='Co Driver'
                />
            </form>
        </CreatePage>
    )
}   