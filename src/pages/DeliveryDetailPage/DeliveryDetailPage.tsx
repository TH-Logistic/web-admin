import { Navigate, useNavigate, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import OrderView from "../common/Orders/OrderView";
import { ROUTES } from "../../utils/routes";
import { useQuery } from "@tanstack/react-query";
import { LocationService } from "../../services/location";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import InfoDialog from "../../components/Dialog/InfoDialog";
import { StatisticsItem } from "../common/StatisticItem/StatisticsItem";

type DeliveryDetailPageProps = {}
const DeliveryDetailPage = (props: DeliveryDetailPageProps) => {
    const navigate = useNavigate();
    const { deliveryId } = useParams();

    const { data: deliveryDetail, isLoading, error } = useQuery({
        queryKey: ['getLocationDetail', deliveryId],
        queryFn: deliveryId ? () => LocationService.getLocationDetail(deliveryId) : undefined

    });

    if (!deliveryId) {
        return <Navigate to={ROUTES.DELIVERY} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }

    return (
        deliveryDetail ?
            (
                <div className="flex flex-col">
                    <DetailHeader header="Delivery" id={deliveryDetail.location.id} />

                    <div className="flex flex-col gap-8 mx-8 mt-8">
                        <div className="flex flex-row items-start gap-8">
                            <div className="flex flex-col items-stretch justify-end flex-1 gap-4 ">
                                <p className="font-bold">Location's Information</p>
                                <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                                    <div className="flex justify-between gap-8">
                                        <p className="font-semibold text-secondary-dark">Name</p>
                                        <p>{deliveryDetail.location.name}</p>
                                    </div>

                                    <div className="flex justify-between gap-8">
                                        <p className="font-semibold text-secondary-dark">Address</p>
                                        <p>{deliveryDetail.location.address}</p>
                                    </div>

                                    <div className="flex justify-between gap-8">
                                        <p className="font-semibold text-secondary-dark">Latitude</p>
                                        <p>{deliveryDetail.location.latitude}</p>
                                    </div>

                                    <div className="flex justify-between gap-8">
                                        <p className="font-semibold text-secondary-dark">Longitude</p>
                                        <p>{deliveryDetail.location.longitude}</p>
                                    </div>
                                </div>
                            </div>

                            <StatisticsItem statistic={deliveryDetail.statistic} />
                        </div>

                        <OrderView />
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
            )
    )
        ;
}

export { DeliveryDetailPage };