import ReactGoogleAutocomplete, { usePlacesWidget } from "react-google-autocomplete";
import Divider from "../../components/Divider/Divider"
import { Input } from "../../components/Input/Input";
import Map from "../../components/Map/Map";
import CreatePage from "../common/CreatePage/CreatePage"
import { useState } from "react";

const CreateLocationPage = () => {
    const [location, setLocation] = useState<{ lat: number, lng: number } | undefined>(undefined);
    return (
        <CreatePage
            header="Create new location"
            title="Add location's information"
            divider={false}
        >
            <div className="flex flex-col gap-8">
                <form className='flex flex-col gap-4'>
                    <Input label="Location name" placeholder="Location name" />

                    <div className="flex flex-row items-center w-full gap-4">
                        <label className="basis-1/5">Location Address</label>
                        <div className="flex flex-col w-full gap-2">
                            <ReactGoogleAutocomplete
                                libraries={['places', 'geocoding']}
                                placeholder="Location Address"
                                className="px-4 py-2 border rounded-md outline-none placeholder:text-caption border-border-color"
                                onPlaceSelected={(place) => {
                                    if (place && place.geometry && place.geometry.location) {
                                        setLocation({
                                            lat: place.geometry.location.lat(),
                                            lng: place.geometry.location.lng()
                                        })
                                    } else {
                                        setLocation(undefined)
                                    }
                                }}
                                options={{
                                    componentRestrictions: { country: "vn" },
                                    types: ["geocode", "establishment"],
                                }}
                            />
                        </div>
                    </div>
                </form>
                <Divider />
                <p>Preview</p>
                <Map
                    center={
                        location ? {
                            lat: location?.lat,
                            lng: location?.lng
                        } : undefined
                    }

                    zoom={16}
                />
            </div>
        </CreatePage >
    )
}

export default CreateLocationPage