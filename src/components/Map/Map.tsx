import GoogleMapReact from "google-map-react";
import Marker from '../../assets/marker.svg';

const MarkerItem = ({ lat, lng }: { lat?: number, lng?: number }) =>
    <img
        src={Marker}
        className="h-12"
        alt="Location Marker"
    />

export type MapProps = {
    center?: {
        lat: number;
        lng: number;
    },
    zoom?: number
};
const Map = ({
    center,
    zoom = 15
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
                defaultCenter={defaults.center}
                defaultZoom={defaults.zoom}
                center={center}
                zoom={zoom}
            >

                {center && <MarkerItem lat={center?.lat} lng={center?.lng} />}
            </GoogleMapReact>
        </div>
    )
}

export default Map;