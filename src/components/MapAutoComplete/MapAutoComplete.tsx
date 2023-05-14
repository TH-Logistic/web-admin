import ReactGoogleAutocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { InputProps } from "../Input/Input";
type MapAutoCompleteProps = {
    onLocationChose?: (location?: { lat: number, lng: number }) => void
} & InputProps;


const MapAutoComplete = ({
    onLocationChose,
    error,
    children,
    label,
    register,
    className,
    ...props
}: MapAutoCompleteProps) => {
    const { ref } = usePlacesWidget<HTMLInputElement>({
        onPlaceSelected: (place) => {
            if (place && place.geometry && place.geometry.location) {
                onLocationChose?.({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                })
            } else {
                onLocationChose?.(undefined)
            }
        },
        libraries: ['places', 'geocoding'],
    });

    return (
        <div className="flex flex-col w-full gap-2">
            <ReactGoogleAutocomplete
                {...props}
                libraries={['places', 'geocoding']}
                placeholder="Location Address"
                className={`px-4 py-2 border rounded-md outline-none placeholder:text-caption border-border-color ${error ? 'border-error-color' : 'border-border-color'}`}
                onPlaceSelected={(place) => {
                    if (place && place.geometry && place.geometry.location) {
                        onLocationChose?.({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        })
                    } else {
                        onLocationChose?.(undefined)
                    }
                }}
                options={{
                    componentRestrictions: { country: "vn" },
                    types: ["geocode", "establishment"],
                }}
            />
            {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
        </div>
    )
}

export default MapAutoComplete;