import { Navigate, useNavigate, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import FemaleIcon from "../../assets/female.svg";
import MaleIcon from "../../assets/male.svg";
import { ROUTES } from "../../utils/routes";
import { useQuery } from "@tanstack/react-query";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import InfoDialog from "../../components/Dialog/InfoDialog";
import { TransportationService } from "../../services/transportation";
import OrderView from "../common/Orders/OrderView";
import { StatisticsItem } from "../common/StatisticItem/StatisticsItem";
import moment from "moment";
import { Gender } from "../../entities/staff";

type TransportationDetailPageProps = {}
const TransportationDetailPage = (props: TransportationDetailPageProps) => {
    const navigate = useNavigate();
    const { transportationId } = useParams();

    const { data: transportationDetail, error, isLoading } = useQuery({
        queryKey: ['getTransportationDetail', transportationId],
        queryFn: transportationId ? () => TransportationService.getTransportationDetail(transportationId) : undefined
    });

    if (!transportationId) {
        return <Navigate to={ROUTES.TRUCKS} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }

    return transportationDetail ?
        (
            <div className="flex flex-col mb-8">
                <DetailHeader header="Transportation" id={transportationId} />

                <div className="flex flex-col gap-8 mx-8 mt-8">
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col justify-end flex-1 gap-4">
                            <p className="font-bold">Main driver's infromation</p>
                            <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color" onClick={() => navigate(`/drivers/${transportationDetail.transportation.mainDriver.id}`)}>
                                <div className="flex flex-row items-center gap-2">
                                    <img src={transportationDetail.transportation.mainDriver.gender === Gender.MALE ? MaleIcon : FemaleIcon} alt="Avatar" className="w-16 rounded-full " />
                                    <p className="text-lg">{transportationDetail.transportation.mainDriver.name}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Phone Number</p>
                                    <p>{transportationDetail.transportation.mainDriver.phoneNumber}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Age</p>
                                    <p>{moment(moment.now()).diff(moment(Number(transportationDetail.transportation.mainDriver.dateOfBirth)), "y") + 1}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Number of trips</p>
                                    <p>{transportationDetail.transportation.coDriver?.numberOfTrips}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end flex-1 gap-4">
                            <p className="font-bold">Co driver's information</p>
                            <div className="h-full p-4 border rounded-md border-border-color">
                                {
                                    transportationDetail.transportation.coDriver ?
                                        (
                                            <div className="flex flex-col h-full gap-4" onClick={() => navigate(`/drivers/${transportationDetail.transportation.coDriver?.id}`)}>
                                                <div className="flex flex-row items-center gap-2">
                                                    <img src={transportationDetail.transportation.mainDriver.gender === Gender.MALE ? MaleIcon : FemaleIcon} alt="Avatar" className="w-16 rounded-full " />
                                                    <p className="text-lg">{transportationDetail.transportation.coDriver?.name}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-secondary-dark">Phone Number</p>
                                                    <p>{transportationDetail.transportation.coDriver?.phoneNumber}</p>
                                                </div>

                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-secondary-dark">Age</p>
                                                    <p>{moment(moment.now()).diff(moment(Number(transportationDetail.transportation.coDriver?.dateOfBirth ?? moment.now())), "y") + 1}</p>
                                                </div>

                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-secondary-dark">Number of trips</p>
                                                    <p>{transportationDetail.transportation.coDriver?.numberOfTrips}</p>
                                                </div>
                                            </div>
                                        ) :

                                        (
                                            <div className="flex flex-col items-center justify-center h-full text-center">
                                                <p>Co driver has not been assigned</p>
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col items-stretch justify-end flex-1 gap-4 ">
                            <p className="font-bold">Truck's information</p>
                            <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">License plate</p>
                                    <p>{transportationDetail.transportation.licensePlate}</p>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">Load</p>
                                    <p>{transportationDetail.transportation.load} tons</p>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <p className="font-semibold text-secondary-dark">Status</p>
                                    <p className={`px-6 text-sm font-semibold border rounded-full ${transportationDetail.transportation.deliveryStatus === 1 ? "text-truck-color-idle" : "text-truck-color-delivery"} border-border-color`}>{transportationDetail.transportation.deliveryStatus === 1 ? "Idle" : "Delivery"}</p>
                                </div>

                                <div className={`flex justify-between gap-4 ${transportationDetail.transportation.deliveryStatus === 2 ? 'collapse' : 'visible'}`}>
                                    <p className="font-semibold text-secondary-dark">Order</p>
                                    {/* // TODO ADD ORDER */}
                                    <p className="text-end">{'ORDER ID'}</p>
                                </div>

                                <div className={`flex justify-between gap-4 ${transportationDetail.transportation.deliveryStatus === 1 ? 'collapse' : 'visible'}`}>
                                    <p className="font-semibold text-secondary-dark">Garage</p>
                                    <p className="text-end">{transportationDetail.transportation.garage.name}</p>
                                </div>

                                <div className={`flex justify-between gap-4 ${transportationDetail.transportation.deliveryStatus === 1 ? 'collapse' : 'visible'}`}>
                                    <p className="font-semibold text-secondary-dark">Address</p>
                                    <p className="text-end">{transportationDetail.transportation.garage.address}</p>
                                </div>
                            </div>
                        </div>

                        <StatisticsItem statistic={transportationDetail.statistic} />
                    </div>

                    <OrderView
                        orders={transportationDetail.jobs}
                    />
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

export { TransportationDetailPage };