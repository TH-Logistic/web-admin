import { useLocation, useParams } from "react-router-dom";
import BaseHeader from "../../components/Headers/BaseHeader/BaseHeader";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { OrderStatusItem } from "../common/Orders/OrderStatusItem";
import { OrderStatus } from "../../entities/order";
import ActionButton from "../../components/ActionButton/ActionButton";

type OrderDetailPageProps = object;
const OrderDetailPage = (props: OrderDetailPageProps) => {
    const { orderId } = useParams();
    return (
        <div className="flex flex-col">
            <DetailHeader header="Order" id="OO1">
                <OrderStatusItem status={OrderStatus.OPEN} className="px-4" />
            </DetailHeader>

            <div className="flex flex-row gap-8 p-8">
                <div className="flex-1 ">
                    <OrderDetailTransportation />
                </div>

                <div className="flex-1 ">
                    <OrderDetailDestinationGarage />
                </div>
            </div>

            <div className="flex flex-row gap-8 p-8">
                <div className="flex-1 ">
                    <OrderDetailMainDriver />
                </div>

                <div className="flex-1 ">
                    <OrderDetailCoDriver />
                </div>
            </div>

            <div className="flex flex-row gap-8 p-8">
                <div className="flex-1">
                    <OrderDetailOrderInformation />
                </div>

                <div className="flex flex-col flex-1 gap-8">
                    <OrderDetailProducts />
                    <OrderDetailContact />
                    <OrderDetailRequestBilling />
                </div>
            </div>
        </div>
    )
}

type OrderDetailItemContainerProps = React.PropsWithChildren<{ title: string }>;
const OrderDetailItemContainer = ({ title, children }: OrderDetailItemContainerProps) => {
    return (
        <div className="flex flex-col h-full gap-4">
            <p className="font-semibold">{title}</p>
            <div className="min-h-[30vh] h-full outline flex flex-col rounded-md outline-1 outline-border-color">
                <div className="flex flex-col items-center justify-center flex-1 ">
                    {children}
                </div>
            </div>
        </div>
    )
}

const OrderDetailTransportation = () => {
    return (
        <OrderDetailItemContainer title="Transportation">
            <div className="flex flex-col items-center justify-center gap-2">
                <p>Click to add transportation</p>
                <ActionButton title="Add" className="px-8" />
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailDestinationGarage = () => {
    return (
        <OrderDetailItemContainer title="Destination Garage">
            <div className="flex flex-col items-center justify-center h-full gap-2">
                <p>Click to add destination garage</p>
                <ActionButton title="Add" className="px-8" />
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailMainDriver = () => {
    return (
        <OrderDetailItemContainer title="Main Driver's Information">
            <div className="flex flex-col items-center justify-center h-full gap-2">
                <p>Driver has not been assigned</p>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailCoDriver = () => {
    return (
        <OrderDetailItemContainer title="Co Driver's Information">
            <div className="flex flex-col items-center justify-center h-full gap-2">
                <p>Driver has not been assigned</p>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailOrderInformation = () => {
    return (
        <OrderDetailItemContainer title="Orders Information">

        </OrderDetailItemContainer>
    )
}

const OrderDetailProducts = () => {
    return (
        <OrderDetailItemContainer title="Products">

        </OrderDetailItemContainer>
    )
}

const OrderDetailContact = () => {
    return (
        <OrderDetailItemContainer title="Contact">

        </OrderDetailItemContainer>
    )
}

const OrderDetailRequestBilling = () => {
    return (
        <OrderDetailItemContainer title="Request Billing">
            <div>
                The order hasn’t been assigned
            </div>
        </OrderDetailItemContainer>
    )
}



export { OrderDetailPage };