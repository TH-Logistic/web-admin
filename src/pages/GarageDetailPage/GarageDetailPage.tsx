import { Navigate, useLocation, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { Garage } from "../../entities/garage";
import OrderView from "../common/Orders/OrderView";
import FemaleIcon from "../../assets/female.svg";
import { ROUTES } from "../../utils/routes";

type GarageDetailPageProps = {}
const GarageDetailPage = (props: GarageDetailPageProps) => {

    const { garageId } = useParams();
    const { state } = useLocation();

    const garage = state as Garage;

    if (garage == null) {
        return <Navigate to={ROUTES.GARAGE} />
    }

    return (
        <div className="flex flex-col">
            <DetailHeader header="Garage" id={garage.id} />

            <div className="flex flex-col gap-8 mx-8 mt-8">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col justify-end flex-1 gap-4">
                        <p className="font-bold">Garage's Manager</p>
                        <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                            <div className="flex flex-row items-center gap-2">
                                <img src={FemaleIcon} alt="Avatar" className="w-16 rounded-full " />
                                <p className="text-lg">Le Hoang Thinh</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold text-secondary-dark">Phone Number</p>
                                <p>0902514621</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="font-semibold text-secondary-dark">Role</p>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-stretch justify-end flex-1 gap-4 ">
                        <p className="font-bold">Garage's Information</p>
                        <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-secondary-dark">Name</p>
                                <p>{garage.name}</p>
                            </div>

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-secondary-dark">Address</p>
                                <p>{garage.address}</p>
                            </div>

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-secondary-dark">Latitude</p>
                                <p>{garage.latitude}</p>
                            </div>

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-secondary-dark">Longitude</p>
                                <p>{garage.longitude}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <OrderView />
            </div>
        </div>
    );
}

export { GarageDetailPage };