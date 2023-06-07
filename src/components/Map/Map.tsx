import GoogleMapReact from "google-map-react";
import Marker from '../../assets/marker.svg';

type Coordiate = {
    lat: number;
    lng: number;
};

export type MarkerProps = Coordiate & {
    title?: string
}
const MarkerItem = ({ lat, lng, title }: MarkerProps) =>
    <div className="flex flex-col w-fit">
        <img
            src={Marker}
            className="h-12 cursor-pointer"
            alt="Location Marker"
        />

        {title && <p className="font-semibold text-black text-md">{title}</p>}
    </div>



export type MapProps = {
    center?: Coordiate,
    zoom?: number,
    markers?: MarkerProps[],
} & React.ComponentProps<typeof GoogleMapReact>;
const Map = ({
    center,
    zoom = 16,
    markers = [],
    ...props
}: MapProps) => {
    const defaults = {
        center: {
            lat: 10.762622,
            lng: 106.660172
        },
        zoom: 14
    }
    return (
        <div className="w-full h-[60vh]">
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
                center={center}
                zoom={zoom}
                {...props}
            >

                {/* {center && <MarkerItem lat={center?.lat} lng={center?.lng} />} */}
                {
                    markers.map(marker =>
                        <MarkerItem
                            lat={marker.lat}
                            lng={marker.lng}
                            key={marker.lat + marker.lng}
                            title={marker.title} />
                    )
                }
            </GoogleMapReact>
        </div>
    )
}

export default Map;