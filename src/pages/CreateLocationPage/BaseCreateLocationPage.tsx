import Divider from "../../components/Divider/Divider"
import { Input } from "../../components/Input/Input";
import CreatePage from "../common/CreatePage/CreatePage"
import { useEffect, useState } from "react";
import MapAutoComplete from "../../components/MapAutoComplete/MapAutoComplete";
import { useForm } from "react-hook-form";
import Map from "../../components/Map/Map";

type Coordinate = {
    lat: number;
    lng: number;
}

export type CreateLocationPageInputs = {
    name: string;
    address: string;
    location: Coordinate;
}

type BaseCreateLocationPageProps = {
    header: string,
    title: string,
    onCreateLocation: (data: CreateLocationPageInputs) => void
}

const BaseCreateLocationPage = ({
    header,
    title,
    onCreateLocation
}: BaseCreateLocationPageProps) => {

    const [location, setLocation] = useState<Coordinate | undefined>(undefined);

    const { register, formState: { errors }, handleSubmit, setValue, trigger, reset } = useForm<CreateLocationPageInputs>();

    useEffect(() => {
        if (location) {
            setValue("location", location);
        }
    }, [location, setValue])

    return (
        <CreatePage
            header={header}
            title={title}
            divider={false}
            onPrimaryButtonClicked={handleSubmit(onCreateLocation)}
        >
            <div className="flex flex-col gap-8">
                <form className='flex flex-col gap-8'>
                    <Input
                        label="Location name"
                        placeholder="Location name"
                        error={errors.name}
                        register={register('name', {
                            required: {
                                value: true,
                                message: 'Location name cannot be empty!'
                            }
                        })}
                    />

                    <div className="flex flex-row w-full gap-4">
                        <label className="basis-1/5">Location Address</label>
                        <MapAutoComplete
                            onChange={(value) => {
                                setValue('address', value.target.value);
                                trigger('address');
                            }}
                            error={errors.address}
                            register={
                                register('address', {
                                    required: {
                                        message: 'Location address can not be empty!',
                                        value: true
                                    }
                                })
                            }
                            onLocationChose={(location) => {
                                setLocation(location);
                            }}
                        />
                    </div>

                    <div className="flex flex-row w-full gap-4">
                        <label className="basis-1/5">Location coordinate</label>
                        <div className="flex flex-row w-full gap-6">
                            <Input
                                placeholder="Latitude"
                                type="number"
                                error={errors.location?.lat}
                                register={register('location.lat', {
                                    required: {
                                        value: true,
                                        message: "Latitude can not be empty!"
                                    },
                                })}
                                readOnly
                            />
                            <Input
                                error={errors.location?.lng}
                                register={register('location.lng', {
                                    required: {
                                        value: true,
                                        message: "Longitude can not be empty!"
                                    },
                                })}
                                placeholder="Longitude"
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>
                </form>
                <Divider />
                <p>Preview</p>
                <Map
                    onClick={(value) => {
                        setLocation({
                            lat: value.lat,
                            lng: value.lng
                        })
                    }}
                    markers={
                        location ? [{
                            lat: location?.lat,
                            lng: location?.lng
                        }] : undefined
                    }
                    center={
                        location ? {
                            lat: location?.lat,
                            lng: location?.lng
                        } : undefined
                    }
                />
            </div>
        </CreatePage >
    )
}

export default BaseCreateLocationPage