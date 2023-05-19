import { Navigate, useLocation, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { Garage } from "../../entities/garage";
import OrderView from "../common/Orders/OrderView";
import FemaleIcon from "../../assets/female.svg";
import { Location } from "../../entities/location";

type DeliveryDetailPageProps = {}
const DeliveryDetailPage = (props: DeliveryDetailPageProps) => {

    const { deliveryId } = useParams();
    const { state } = useLocation();

    const delivery = state as Location;

    if (delivery == null) {
        return <Navigate to='/locations/delivery' />
    }

    return (
        <div className="flex flex-col">
            <DetailHeader header="Delivery" id={delivery.id} />

            <div className="flex flex-col gap-8 mx-8 mt-8">
                <div className="flex flex-row items-start gap-8">
                    <div className="flex flex-col items-stretch justify-end flex-1 gap-4 ">
                        <p className="font-bold">Location's Information</p>
                        <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                            <div className="flex justify-between gap-8">
                                <p className="font-semibold text-secondary-dark">Name</p>
                                <p>{delivery.name}</p>
                            </div>

                            <div className="flex justify-between gap-8">
                                <p className="font-semibold text-secondary-dark">Address</p>
                                <p>{delivery.address}</p>
                            </div>

                            <div className="flex justify-between gap-8">
                                <p className="font-semibold text-secondary-dark">Latitude</p>
                                <p>{delivery.latitude}</p>
                            </div>

                            <div className="flex justify-between gap-8">
                                <p className="font-semibold text-secondary-dark">Longitude</p>
                                <p>{delivery.longitude}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end flex-1 gap-4">
                        <p className="font-bold">Statistic</p>
                        <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                            <div className="flex justify-between">
                                <p className="font-semibold text-secondary-dark">Number of trips</p>
                                <p>23</p>
                            </div>
                            <ul className="flex flex-col px-4 list-disc list-inside">
                                <li className=" text-secondary-light">
                                    <div className="inline-flex flex-row justify-between ">
                                        <p>{`Trip based: 15`}</p>
                                    </div>
                                </li>

                                <li className="text-secondary-light">
                                    <div className="inline-flex flex-row justify-between">
                                        <p>{`Ton-based: 8`}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <OrderView />
            </div>


        </div>
    );
}

export { DeliveryDetailPage };