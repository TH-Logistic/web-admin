// import { GoogleMap, Marker, useJsApiLoader, DistanceMatrixService } from "@react-google-maps/api";
// import MarkerIcon from '../../assets/marker.svg';
// import React from "react";

import React from "react";
import { useMemo } from "react";

// export type MapProps = {
//     center?: {
//         lat: number;
//         lng: number;
//     },
//     zoom?: number
// } & React.ComponentProps<typeof GoogleMap>;
// const MapV2 = ({
//     center,
//     zoom = 16,
//     ...props
// }: MapProps) => {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyCFKLGuYz6ffYby7U-ODjFtV5TO4nDyevE"
//     })

//     const [map, setMap] = React.useState<any>(null)

//     const onLoad = React.useCallback(function callback(map: any) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map: any) {
//         setMap(null)
//     }, [])

//     const defaults = {
//         center: {
//             lat: 10.762622,
//             lng: 106.660172
//         },
//         zoom: 14
//     }
//     return (
//         <div className="w-full h-[60vh]">
//             <DistanceMatrixService
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//                 options={{
//                     destinations: [{ lat: 1.296788, lng: 103.778961 }],
//                     origins: [{ lng: 72.89216, lat: 19.12092 }],
//                     travelMode: google.maps.TravelMode.DRIVING,

//                 }}
//                 callback={(res) => {
//                     console.log("RESPONSE", res);
//                 }}
//             />
//         </div>
//     );
// }

// export default React.memo(MapV2)

const MapV2 = () => (<div></div>);

export default React.memo(MapV2);