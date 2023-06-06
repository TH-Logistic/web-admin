import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CreatePage from '../common/CreatePage/CreatePage';
import { Input } from '../../components/Input/Input';
import CreateTransportationAddDriverDialog from './components/CreateTransportationAddDriverDialog';
import { useEffect, useState } from 'react';
import { Driver } from '../../entities/driver';
import { useDialog } from '../../hooks/use-dialog';
import { useMutation } from '@tanstack/react-query';
import { TransportationService } from '../../services/transportation';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import OrderDetailAddEndingGarageDialog from '../OrderDetailPage/components/OrderDetailAddEndingGarageDialog';

type CreateTransportationInputs = {
    licensePlate: string;
    load: number;
    garageId: string;
    mainDriverId: string;
    coDriverId?: string;
}

export default function CreateTransportationPage() {

    const navigate = useNavigate();
    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();
    const { register, handleSubmit, formState: { errors }, setValue, setError, trigger, clearErrors } = useForm<CreateTransportationInputs>();

    const createTransportationMutation = useMutation({
        mutationKey: ["createTransportation"],
        mutationFn: TransportationService.createTransportation,
    })

    const onSubmit: SubmitHandler<CreateTransportationInputs> = (data: CreateTransportationInputs) => {
        clearErrors("mainDriverId")
        clearErrors("coDriverId")
        if (chosenMainDriver && (chosenMainDriver.id === chosenCoDriver?.id)) {
            showInfoDialog({
                success: false,
                message: "Main Driver & Co Driver can not be the same!",
                onProceedClicked: () => {
                    setError("mainDriverId", { message: "Main Driver & Co Driver can not be the same!" })
                    setError("coDriverId", { message: "Main Driver & Co Driver can not be the same!" })
                }
            })
            return;
        }

        showLoadingDialog();

        createTransportationMutation.mutate({
            ...data,
            licensePlate: data.licensePlate.trim(),
        }, {
            onSuccess: () => {
                showInfoDialog({
                    success: true,
                    message: "Create Transportation success",
                    onProceedClicked: () => navigate(ROUTES.TRUCKS)
                });
            },
            onError: (err) => {
                showInfoDialog({
                    success: false,
                    message: err?.toString(),
                });
            }
        })
    }

    const [isChoosingMainDriver, setIsChoosingMainDriver] = useState<boolean | undefined>(undefined);
    const [chosenMainDriver, setChosenMainDriver] = useState<Driver | undefined>(undefined);
    const [chosenCoDriver, setChosenCoDriver] = useState<Driver | undefined>(undefined);
    const [openChooseDriverDialog, setOpenChooseDriverDialog] = useState(false);
    const [openChooseGarageDialog, setOpenChooseGarageDialog] = useState(false);

    useEffect(() => {
        if (chosenMainDriver) {
            setValue("mainDriverId", chosenMainDriver.id)
        }
    }, [chosenCoDriver?.id, chosenMainDriver, clearErrors, setError, setValue])

    useEffect(() => {
        if (chosenCoDriver) {
            setValue("coDriverId", chosenCoDriver.id)
        }
    }, [chosenCoDriver, setValue])

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
                    register={register('mainDriverId', {
                        required: {
                            value: true,
                            message: 'Main Driver can not be empty'
                        },
                    })}
                    type='text'
                    error={errors.mainDriverId}
                    label='Main Driver'
                    readOnly
                    onClick={() => {
                        setIsChoosingMainDriver(true);
                        setOpenChooseDriverDialog(true);
                    }}
                />

                <Input
                    placeholder='Co-driver'
                    register={register('coDriverId', {

                    })}
                    type='text'
                    error={errors.coDriverId}
                    label='Co Driver'
                    readOnly
                    onClick={() => {
                        setIsChoosingMainDriver(false);
                        setOpenChooseDriverDialog(true);
                    }}
                />

                <Input
                    placeholder='Garage'
                    register={register('garageId', {

                    })}
                    type='text'
                    error={errors.garageId}
                    label='Garage'
                    readOnly
                    onClick={() => {
                        setOpenChooseGarageDialog(true)
                    }}
                />

                <CreateTransportationAddDriverDialog
                    open={openChooseDriverDialog}
                    onPrimaryClicked={(driver) => {
                        setOpenChooseDriverDialog(false);
                        if (isChoosingMainDriver) {
                            setChosenMainDriver(driver);
                        } else {
                            setChosenCoDriver(driver);
                        }

                        setIsChoosingMainDriver(undefined)
                    }}
                    onSecondaryClicked={() => setOpenChooseDriverDialog(false)}
                />

                <OrderDetailAddEndingGarageDialog
                    open={openChooseGarageDialog}
                    onPrimaryClicked={(garage) => {
                        setOpenChooseGarageDialog(false);
                        setValue("garageId", garage.id);
                    }}
                    onSecondaryClicked={() => setOpenChooseGarageDialog(false)}
                />
            </form>
        </CreatePage>
    )
}   