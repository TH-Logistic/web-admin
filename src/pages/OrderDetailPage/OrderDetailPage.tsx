import { useNavigate, useParams } from "react-router-dom";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { OrderStatusItem } from "../common/Orders/OrderStatusItem";
import { OrderDetail, OrderStatus } from "../../entities/order";
import ActionButton from "../../components/ActionButton/ActionButton";
import ProductTypeItem from "../ProductPage/Product/ProductTypeItem";
import Map from "../../components/Map/Map";
import { useMutation } from "@tanstack/react-query";
import * as OrderService from "../../services/order/order-service";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import { useDialog } from "../../hooks/use-dialog";
import Loading from "../../components/Loading/Loading";
import { FormattedNumber } from "react-intl";
import { millisecondToHHMMDDmmYYYY } from "../../utils/formatter";


type OrderDetailPageProps = object;
type OrderDetailSectionProps = {
    orderDetail: OrderDetail
}
const OrderDetailPage = (props: OrderDetailPageProps) => {
    const { showInfoDialog, showLoadingDialog, hideDialog } = useDialog();
    const navigate = useNavigate();
    const { orderId } = useParams();

    const { mutate, data: order, isLoading } = useMutation({
        mutationKey: ["getOrderDetail"],
        mutationFn: OrderService.getOrderDetail,
    })

    useEffect(() => {
        if (orderId) {
            mutate(orderId, {
                onError: (err) => {
                    showInfoDialog({
                        success: false,
                        message: err?.toString(),
                        onProceedClicked: () => {
                            navigate(ROUTES.ORDERS);
                        }
                    })
                }
            })
        }
    }, [])


    return isLoading ?
        <Loading defaultOpen /> :
        !order ?
            <></> :
            <div className="flex flex-col">
                <DetailHeader header="Order" id={orderId}>
                    <OrderStatusItem status={order.status} className="px-4" />
                </DetailHeader>

                <div className="flex flex-col gap-8 p-8">
                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1 ">
                            <OrderDetailTransportation />
                        </div>

                        <div className="flex-1">
                            <OrderDetailDestinationGarage />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1 ">
                            <OrderDetailMainDriver />
                        </div>

                        <div className="flex-1 ">
                            <OrderDetailCoDriver />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1">
                            <OrderDetailOrderInformation orderDetail={order} />
                        </div>

                        <div className="flex flex-col flex-1 gap-8">
                            <OrderDetailProducts orderDetail={order} />
                            <OrderDetailContact orderDetail={order} />
                            <OrderDetailRequestBilling />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-semibold">Route</p>
                        <OrderDetailMap orderDetail={order} />
                    </div>
                </div>
            </div>
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

const OrderDetailOrderInformation = ({ orderDetail }: OrderDetailSectionProps) => {
    return (
        <OrderDetailItemContainer title="Orders Information">
            <div className="flex flex-col flex-1 w-full gap-4 p-4 overflow-auto">
                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Status</p>
                    <OrderStatusItem status={orderDetail?.status ?? OrderStatus.OPEN} />
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Type</p>
                    <p>{orderDetail.isTonBased ? 'Ton based' : 'Trip based'}</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Fee</p>
                    <FormattedNumber value={orderDetail.totalPrice} />
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
                                <p>Must delivery before</p>
                                <p className="underline underline-offset-8">{millisecondToHHMMDDmmYYYY(orderDetail.mustDeliverAt)}</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Created At</p>
                                <p>{millisecondToHHMMDDmmYYYY(orderDetail.createdAt)}</p>
                            </div>
                        </li>


                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Assigned At</p>
                                <p>{
                                    orderDetail.assignedAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.assignedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Started At</p>
                                <p>{
                                    orderDetail.acceptedAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.acceptedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up arrived at</p>
                                <p>{
                                    orderDetail.pickUpArriveAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.pickUpArriveAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up done at</p>
                                <p>{
                                    orderDetail.pickUpDoneAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.pickUpDoneAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Delivery arrived at</p>
                                <p>{
                                    orderDetail.unloadArriveAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.unloadArriveAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Discharged at</p>
                                <p>{
                                    orderDetail.unloadDoneAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.unloadDoneAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Completed At</p>
                                <p>{
                                    orderDetail.completedAt ?
                                        millisecondToHHMMDDmmYYYY(orderDetail.completedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Note to driver</p>
                    <p>{orderDetail.notesToDriver}</p>
                </div>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailProducts = ({ orderDetail }: OrderDetailSectionProps) => {
    const navigate = useNavigate();
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
                        {orderDetail?.products?.map(product =>
                            <tr key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                                <td className="pt-4 text-sm text-start">
                                    {product.name}
                                </td>

                                <td className="flex items-center justify-center pt-4">
                                    <ProductTypeItem className="text-sm" type={product.types[0]} />
                                </td>

                                <td className="pt-4 text-sm text-end">
                                    <FormattedNumber value={product.basePrice} />
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailContact = ({ orderDetail }: OrderDetailSectionProps) => {
    return (
        <OrderDetailItemContainer title="Contact">
            <div className="flex flex-col justify-center w-full h-full gap-8 p-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Pick up</p>

                    <ul className="list-disc">
                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact name</p>
                                <p>{orderDetail?.pickUpContactName}</p>
                            </div>
                        </li>

                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>{orderDetail?.pickUpContactNo}</p>
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
                                <p>{orderDetail?.unloadContactName}</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>{orderDetail?.unloadContactNo}</p>
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


const OrderDetailMap = ({ orderDetail }: OrderDetailSectionProps) => {
    const markers = [];

    if (orderDetail.startingGarage) {
        markers.push({
            lat: orderDetail.startingGarage.latitude,
            lng: orderDetail.startingGarage.longitude,
            title: "Starting garage"
        })
    }

    if (orderDetail.endingGarage) {
        markers.push({
            lat: orderDetail.endingGarage.latitude,
            lng: orderDetail.endingGarage.longitude,
            title: "Ending garage"
        })
    }


    markers.push(
        {
            lat: orderDetail.route.fromLocation.latitude,
            lng: orderDetail.route.fromLocation.longitude,
            title: "Departure"
        },
        {
            lat: orderDetail.route.toLocation.latitude,
            lng: orderDetail.route.toLocation.longitude,
            title: "Destination"
        })

    const center = {
        lat: markers.reduce((previous, current) => previous + current.lat, 0) / (markers.length === 0 ? 1 : markers.length),
        lng: markers.reduce((previous, current) => previous + current.lng, 0) / (markers.length === 0 ? 1 : markers.length)
    }

    return (
        <Map markers={markers} center={center} zoom={12} />
    )
}



export { OrderDetailPage };