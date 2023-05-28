import { useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { OrderStatusItem } from "../common/Orders/OrderStatusItem";
import { OrderStatus } from "../../entities/order";
import ActionButton from "../../components/ActionButton/ActionButton";
import ProductTypeItem from "../ProductPage/Product/ProductTypeItem";
import ProductType from "../ProductPage/Product/ProductType";

type OrderDetailPageProps = object;
const OrderDetailPage = (props: OrderDetailPageProps) => {
    const { orderId } = useParams();
    return (
        <div className="flex flex-col">
            <DetailHeader header="Order" id="OO1">
                <OrderStatusItem status={OrderStatus.OPEN} className="px-4" />
            </DetailHeader>

            <div className="flex flex-col gap-8 p-8 md:flex-row">
                <div className="flex-1 ">
                    <OrderDetailTransportation />
                </div>

                <div className="flex-1">
                    <OrderDetailDestinationGarage />
                </div>
            </div>

            <div className="flex flex-col gap-8 p-8 md:flex-row">
                <div className="flex-1 ">
                    <OrderDetailMainDriver />
                </div>

                <div className="flex-1 ">
                    <OrderDetailCoDriver />
                </div>
            </div>

            <div className="flex flex-col gap-8 p-8 md:flex-row">
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
            <p className="text-lg font-semibold">{title}</p>
            <div className="min-h-[30vh] max-h-full h-full outline flex flex-col rounded-md outline-1 outline-border-color">
                <div className="flex flex-col items-center flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

const OrderDetailTransportation = () => {
    return (
        <OrderDetailItemContainer title="Transportation">
            <div className="flex flex-col items-center justify-center flex-1 gap-2">
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
            <div className="flex flex-col flex-1 w-full gap-4 p-4 overflow-auto">
                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Status</p>
                    <OrderStatusItem status={OrderStatus.DELIVERY_ARRIVED} />
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Type</p>
                    <p>Ton based</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Fee</p>
                    <p>5,000,000</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p>Transportation's status before delivery</p>
                    <div className="flex items-center justify-center h-40 p-4 bg-red-200">
                        <p className="text-center">The transportation hasn’t been assigned</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Tracking order</p>

                    <ul className="flex flex-col gap-4 list-disc [&>*]:ml-6">
                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Created At</p>
                                <p>17:42 24/03/2023</p>
                            </div>
                        </li>


                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Assigned At</p>
                                <p>19:20 25/03/2023</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Started At</p>
                                <p>Not Yet</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up arrived at</p>
                                <p>Not Yet</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up done at</p>
                                <p>Not Yet</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Delivery arrived at</p>
                                <p>Not Yet</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Discharged at</p>
                                <p>Not Yet</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Completed At</p>
                                <p>Not Yet</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Note to driver</p>
                    <p>Notes</p>
                </div>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailProducts = () => {
    return (
        <OrderDetailItemContainer title="Products">
            <div className="p-4 h-[30vh] overflow-auto">
                <table className="w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="text-start text-primary-table-color">
                                Name
                            </th>

                            <th className="text-primary-table-color">
                                Type
                            </th>

                            <th className="text-end text-primary-table-color">
                                Base Price
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="pt-4 text-sm text-start">
                                Gỗ Lâm Tuyền
                            </td>

                            <td className="flex items-center justify-center pt-4">
                                <ProductTypeItem className="text-sm" type={ProductType.Agricultural} />
                            </td>

                            <td className="pt-4 text-sm text-end">
                                20,000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailContact = () => {
    return (
        <OrderDetailItemContainer title="Contact">
            <div className="flex flex-col justify-center w-full h-full gap-8 p-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Pick up</p>

                    <ul className="list-disc">
                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact name</p>
                                <p>Le Hoang Thinh</p>
                            </div>
                        </li>

                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>0902514621</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Unload contact</p>

                    <ul className="list-disc [&>*]:ml-6 flex flex-col">
                        <li>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact name</p>
                                <p>Vo Duc Trung Hieu</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>094272618</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailRequestBilling = () => {
    return (
        <OrderDetailItemContainer title="Request Billing">
            <div className="flex flex-col items-center justify-center h-full">
                The order hasn’t been assigned
            </div>
        </OrderDetailItemContainer>
    )
}



export { OrderDetailPage };