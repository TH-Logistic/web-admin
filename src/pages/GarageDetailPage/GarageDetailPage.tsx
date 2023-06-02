import { Navigate, useNavigate, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import FemaleIcon from "../../assets/female.svg";
import { ROUTES } from "../../utils/routes";
import TransportationItem from "../TransportationPage/TransportationItem/TransportationItem";
import { useQuery } from "@tanstack/react-query";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import { GarageService } from "../../services/garage";
import InfoDialog from "../../components/Dialog/InfoDialog";

type GarageDetailPageProps = {}
const GarageDetailPage = (props: GarageDetailPageProps) => {
    const navigate = useNavigate();
    const { garageId } = useParams();

    const { data: garageDetail, error, isLoading } = useQuery({
        queryKey: ['getGarageDetail', garageId],
        queryFn: garageId ? () => GarageService.getGarageDetail(garageId) : undefined
    });

    if (!garageId) {
        return <Navigate to={ROUTES.GARAGE} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }

    return garageDetail ?
        (
            <div className="flex flex-col mb-8">
                <DetailHeader header="Garage" id={garageId} />

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
                                    <p>{garageDetail.garage.name}</p>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">Address</p>
                                    <p>{garageDetail.garage.address}</p>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">Latitude</p>
                                    <p>{garageDetail.garage.latitude}</p>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">Longitude</p>
                                    <p>{garageDetail.garage.longitude}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="font-semibold">Transportation at garage</p>
                    <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                        {
                            (garageDetail.transportationsAtGarage ?? [])
                                .map(transportation =>
                                    <TransportationItem
                                        item={transportation}
                                        key={transportation.id}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        ) :
        (
            <InfoDialog
                success={false}
                open
                onProceedClicked={() => {
                    navigate(-1)
                }}
                message={error?.toString()}
            />
        );
}

export { GarageDetailPage };