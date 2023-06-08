import LottieNoMapPreview from '../../assets/lottie_no_map_preview.json';
import LottiePlayer from 'lottie-react';
import CreatePage from '../common/CreatePage/CreatePage';
import { Input } from '../../components/Input/Input';
import { useEffect, useState } from 'react';
import { Location } from '../../entities/location';
import AddLocationDialog from '../common/AddLocationDialog/AddLocationDialog';
import { CreateRouteRequest } from '../../services/route/dto/create-route-request';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDialog } from '../../hooks/use-dialog';
import { useMutation } from '@tanstack/react-query';
import { RouteService } from '../../services/route';
import { ROUTES } from '../../utils/routes';
import Map, { MarkerProps } from '../../components/Map/Map';

type CreateRouteInputs = CreateRouteRequest;

export default function CreateRoutePage() {

    const navigate = useNavigate();
    const { showInfoDialog, showLoadingDialog } = useDialog();
    const createRouteMutation = useMutation({
        mutationKey: ['createRoute'],
        mutationFn: RouteService.createRoute
    });
    const [isChoosingFromLocation, setIsChoosingFromLocation] = useState<boolean | undefined>(undefined);
    const [chosenFromLocation, setChosenFromLocation] = useState<Location | undefined>(undefined);
    const [chosenToLocation, setChosenToLocation] = useState<Location | undefined>(undefined);
    const [openChooseLocationDialog, setOpenChooseLocationDialog] = useState(false);
    const [markers, setMarkers] = useState<MarkerProps[]>([])

    const { register, handleSubmit, formState: { errors }, setValue, setError, trigger, clearErrors } = useForm<CreateRouteInputs>();

    const onSubmit: SubmitHandler<CreateRouteInputs> = (data) => {
        clearErrors("startLocationId")
        clearErrors("endLocationId")
        if (chosenFromLocation?.id === chosenToLocation?.id) {
            showInfoDialog({
                success: false,
                message: "Start & End location can not be the same!",
                onProceedClicked: () => {
                    setError("startLocationId", { message: "Start & End location can not be the same!" })
                    setError("endLocationId", { message: "Start & End location can not be the same!" })
                }
            })
            return;
        }

        showLoadingDialog()

        createRouteMutation.mutate(data, {
            onSuccess: () => {
                showInfoDialog({
                    success: true,
                    message: "Create Route success",
                    onProceedClicked: () => navigate(ROUTES.ROUTES)
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

    useEffect(() => {
        if (chosenFromLocation) {
            setValue("startLocationId", chosenFromLocation.id)
        }
    }, [chosenFromLocation, setValue])

    useEffect(() => {
        if (chosenToLocation) {
            setValue("endLocationId", chosenToLocation.id)
        }
    }, [chosenToLocation, setValue])

    useEffect(() => {
        const tempMarker: MarkerProps[] = []
        if (chosenFromLocation) {
            tempMarker.push({
                lat: chosenFromLocation.latitude,
                lng: chosenFromLocation.longitude,
                title: "From location"
            })
        }

        if (chosenToLocation) {
            tempMarker.push({
                lat: chosenToLocation.latitude,
                lng: chosenToLocation.longitude,
                title: "To location"
            })
        }

        setMarkers(tempMarker)

    }, [chosenFromLocation, chosenToLocation, markers])

    return (
        <CreatePage
            header='Create new route'
            title="Add route's information"
            onPrimaryButtonClicked={() => {
                handleSubmit(onSubmit)();
            }}
        >
            <div className='flex flex-col gap-8'>
                <form className='flex flex-col gap-4'>
                    <Input
                        label='From location'
                        placeholder='From location'
                        readOnly
                        register={register('startLocationId', {
                            required: {
                                value: true,
                                message: 'Start location can not be empty!'
                            },
                        })}
                        onClick={() => {
                            setIsChoosingFromLocation(true);
                            setOpenChooseLocationDialog(true);
                        }}
                    />

                    <Input
                        label="To location"
                        placeholder='To location'
                        readOnly
                        register={register('endLocationId', {
                            required: {
                                value: true,
                                message: 'End location can not be empty!'
                            },
                        })}
                        onClick={() => {
                            setIsChoosingFromLocation(false);
                            setOpenChooseLocationDialog(true);
                        }}
                    />

                    <AddLocationDialog
                        open={openChooseLocationDialog}
                        onPrimaryClicked={(location) => {
                            setOpenChooseLocationDialog(false);
                            if (isChoosingFromLocation) {
                                setChosenFromLocation(location)
                            } else {
                                setChosenToLocation(location);
                            }

                            setIsChoosingFromLocation(undefined)
                        }}
                        onSecondaryClicked={() => {
                            setOpenChooseLocationDialog(false)
                        }}
                    />


                    <Input
                        label="Trip-based cost"
                        placeholder='Trip-based cost'
                        type='number'
                        register={register('tripBasedCost', {
                            required: {
                                value: true,
                                message: 'Trip based cost can not be empty!'
                            },
                            valueAsNumber: true
                        })}
                    />

                    <Input
                        label="Ton-based limit"
                        placeholder='Ton-based limit'
                        type='number'
                        register={register('tonBasedLimit', {
                            required: {
                                value: true,
                                message: 'Ton based limit can not be empty!'
                            },
                            valueAsNumber: true
                        })}
                    />
                </form>

                {
                    (chosenFromLocation || chosenToLocation) ?
                        <Map
                            center={{
                                lat: ((chosenFromLocation?.latitude ?? 0) + (chosenToLocation?.latitude ?? 0)) / 2,
                                lng: ((chosenFromLocation?.longitude ?? 0) + (chosenToLocation?.longitude ?? 0)) / 2
                            }}
                            zoom={12}
                            markers={markers}
                        /> :
                        <MapComponent />
                }
            </div>
        </CreatePage>
    )
}

const MapComponent = () => {
    return <LottiePlayer
        animationData={LottieNoMapPreview}
        className='h-[40vh]'
        loop />
}