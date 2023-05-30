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
import { millisecondToHHMMDDmmYYYY, millisecondToString } from "../../utils/formatter";
import TransportationImage from "../../assets/transportation.svg";
import CheckIcon from "../../assets/check-fill.svg";
import CancelIcon from "../../assets/cancel.svg";
import MaleIcon from "../../assets/male.svg";
import FemaleIcon from "../../assets/male.svg";
import moment from "moment";
import { Gender } from "../../entities/staff";


type OrderDetailPageProps = object;
type OrderDetailSectionProps = {
    order: OrderDetail
}
const OrderDetailPage = (props: OrderDetailPageProps) => {
    const { showInfoDialog, showLoadingDialog, hideDialog } = useDialog();
    const navigate = useNavigate();
    const { orderId } = useParams();

    const { mutate: getOrderMutation, data: order, isLoading: getOrderIsLoading } = useMutation({
        mutationKey: ["getOrderDetail"],
        mutationFn: OrderService.getOrderDetail,
    })

    useEffect(() => {
        if (orderId) {
            getOrderMutation(orderId, {
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


    return getOrderIsLoading ?
        <Loading defaultOpen /> :
        !order ?
            <></> :
            <div className="flex flex-col">
                <DetailHeader header="Order" id={orderId}>
                    <OrderStatusItem status={order.status} className="px-4" />
                </DetailHeader>

                <div className="flex flex-col gap-8 p-8">
                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1">
                            <OrderDetailTransportation order={order} />
                        </div>

                        <div className="flex-1">
                            <OrderDetailDestinationGarage order={order} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1 ">
                            <OrderDetailMainDriver order={order} />
                        </div>

                        <div className="flex-1 ">
                            <OrderDetailCoDriver order={order} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex-1">
                            <OrderDetailOrderInformation order={order} />
                        </div>

                        <div className="flex flex-col flex-1 gap-8">
                            <OrderDetailProducts order={order} />
                            <OrderDetailContact order={order} />
                            <OrderDetailRequestBilling />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-semibold">Route</p>
                        <OrderDetailMap order={order} />
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

const OrderDetailTransportation = ({ order }: OrderDetailSectionProps) => {
    const navigate = useNavigate();
    return (
        <OrderDetailItemContainer title="Transportation">
            {
                order.transportation ?
                    (
                        <div className="flex flex-row items-center justify-between flex-1 w-full gap-4 py-4 pl-4" onClick={() => navigate(`/transportations/${order.transportation?.id}`)}>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="font-semibold">License plate</p>
                                    <p>{order.transportation.licensePlate}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Load</p>
                                    <p>{`${order.transportation.load} kg`}</p>
                                </div>
                            </div>

                            <img src={TransportationImage} alt="Transportation" className="transition duration-500 h-2/3 hover:scale-125" />
                        </div>
                    ) :

                    <div className="flex flex-col items-center justify-center flex-1 gap-2">
                        <p>Click to add transportation</p>
                        <ActionButton title="Add" className="px-8" />
                    </div>
            }

        </OrderDetailItemContainer>
    )
}

const OrderDetailDestinationGarage = ({ order }: OrderDetailSectionProps) => {
    const transportationGarage = order.transportation?.garage;

    if (transportationGarage) {
        return (
            <OrderDetailItemContainer title="Destination Garage">
                <div className="flex flex-col w-full h-full gap-2 p-4">
                    <p className="font-semibold">Must arrive garage at</p>
                    <p>{millisecondToHHMMDDmmYYYY(order.mustDeliverAt)}</p>

                    <div className="flex flex-col [&>*]:break-words gap-4">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-row items-center flex-1 gap-4">
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-center justify-center w-4 h-4 rounded-full bg-garage-starting/25">
                                        <div className="w-2 h-2 rounded-full bg-garage-starting" />
                                    </div>
                                </div>
                                <p>Starting point</p>
                            </div>

                            <div className="flex flex-row items-center flex-1 gap-4">
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-center justify-center w-4 h-4 rounded-full bg-garage-ending/25">
                                        <div className="w-2 h-2 rounded-full bg-garage-ending" />
                                    </div>
                                </div>
                                <p>Ending point</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 [&>*]:flex-1">
                            <p>{order.startingGarage?.name}</p>
                            <p>{order.endingGarage?.name}</p>
                        </div>

                        <div className="flex flex-row gap-4 [&>*]:flex-1">
                            <p>{order.startingGarage?.address}</p>
                            <p>{order.endingGarage?.address}</p>
                        </div>
                    </div>
                </div>

            </OrderDetailItemContainer>
        )
    }
    else {
        return (
            <OrderDetailItemContainer title="Destination Garage">
                <div className="flex flex-col items-center justify-center h-full gap-2">
                    <p>Click to add destination garage</p>
                    <ActionButton title="Add" className="px-8" />
                </div>
            </OrderDetailItemContainer>
        )
    }

}

const OrderDetailMainDriver = ({ order }: OrderDetailSectionProps) => {
    const mainDriver = order.transportation?.mainDriver;

    if (mainDriver) {
        return (
            <OrderDetailItemContainer title="Main Driver's Information">
                <div className="flex flex-col w-full h-full gap-4 p-4">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-row items-center gap-4">
                            <img src={mainDriver.gender === Gender.MALE ? MaleIcon : FemaleIcon} alt="avatar" className="w-16 rounded-full outline-1 outline outline-border-color" />
                            <p>{mainDriver.name}</p>
                        </div>

                        <p className="break-all text-primary-color basis-1/3 lg:basis-1/2 text-end">{mainDriver.id}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between gap-2">
                            <p>Phone number</p>
                            <p>{mainDriver.phoneNumber}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Age</p>
                            <p>{moment(moment.now()).diff(moment(Number(mainDriver.dateOfBirth)), "y") + 1}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Number of trip</p>
                            <p>{120}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Joined date</p>
                            <p>{millisecondToString(moment.now())}</p>
                        </div>
                    </div>

                </div>
            </OrderDetailItemContainer>
        )
    } else {
        return (
            <OrderDetailItemContainer title="Main Driver's Information">
                <div className="flex flex-col items-center justify-center h-full gap-2">
                    <p>Driver has not been assigned</p>
                </div>
            </OrderDetailItemContainer>
        )

    }
}

const OrderDetailCoDriver = ({ order }: OrderDetailSectionProps) => {
    const coDriver = order.transportation?.coDriver;

    if (coDriver) {
        return (
            <OrderDetailItemContainer title="Main Driver's Information">
                <div className="flex flex-col w-full h-full gap-4 p-4">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-row items-center gap-4">
                            <img src={coDriver.gender === Gender.MALE ? MaleIcon : FemaleIcon} alt="avatar" className="w-16 rounded-full outline-1 outline outline-border-color" />
                            <p>{coDriver.name}</p>
                        </div>

                        <p className="break-all text-primary-color basis-1/3 lg:basis-1/2 text-end">{coDriver.id}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between gap-2">
                            <p>Phone number</p>
                            <p>{coDriver.phoneNumber}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Age</p>
                            <p>{moment(moment.now()).diff(moment(Number(coDriver.dateOfBirth)), "y") + 1}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Number of trip</p>
                            <p>{120}</p>
                        </div>

                        <div className="flex flex-row justify-between gap-2">
                            <p>Joined date</p>
                            <p>{millisecondToString(moment.now())}</p>
                        </div>
                    </div>

                </div>
            </OrderDetailItemContainer>
        )
    } else {
        return (
            <OrderDetailItemContainer title="Main Driver's Information">
                <div className="flex flex-col items-center justify-center h-full gap-2">
                    <p>Driver has not been assigned</p>
                </div>
            </OrderDetailItemContainer>
        )

    }
}

const OrderDetailOrderInformation = ({ order }: OrderDetailSectionProps) => {
    return (
        <OrderDetailItemContainer title="Orders Information">
            <div className="flex flex-col flex-1 w-full gap-4 p-4 overflow-auto">
                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Status</p>
                    <OrderStatusItem status={order?.status ?? OrderStatus.OPEN} />
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Type</p>
                    <p>{order.isTonBased ? 'Ton based' : 'Trip based'}</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-2">
                    <p>Order Fee</p>
                    <FormattedNumber value={order.totalPrice} />
                </div>


                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <p className="text-sm font-semibold">Transportation's status before delivery</p>
                        <img src={order.healthcheck?.isHealthcheckOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                    </div>
                    {order.healthcheck?.note && <p className="p-4 text-sm break-words bg-blue-100 rounded-md">{order.healthcheck?.note}</p>}
                    {
                        order.healthcheck ? (
                            <div className="flex flex-col gap-2 [&>div]:flex [&>div]:flex-row [&>div]:justify-between [&>div]:items-center [&>div>p]:text-sm">
                                <div>
                                    <p>Tires</p>
                                    <img src={order.healthcheck.isTiresOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>

                                <div>
                                    <p>Lighting</p>
                                    <img src={order.healthcheck.isLightOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>

                                <div>
                                    <p>Brake</p>
                                    <img src={order.healthcheck.isBrakeOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>

                                <div>
                                    <p>Fluid</p>
                                    <img src={order.healthcheck.isFluidLevelOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>

                                <div>
                                    <p>Battery</p>
                                    <img src={order.healthcheck.isBatteryOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>

                                <div>
                                    <p>Wiper</p>
                                    <img src={order.healthcheck.isWiperOk ? CheckIcon : CancelIcon} alt="Health check transportation" />
                                </div>
                            </div>
                        ) :
                            (
                                <div className="flex items-center justify-center p-4 py-16">
                                    <p className="text-center">The transportation hasn’t been assigned</p>
                                </div>
                            )
                    }
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Tracking order</p>

                    <ul className="flex flex-col gap-4 list-disc [&>*]:ml-6">

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Must delivery before</p>
                                <p className="underline text-end underline-offset-8">{millisecondToHHMMDDmmYYYY(order.mustDeliverAt)}</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Created At</p>
                                <p className="text-end">{millisecondToHHMMDDmmYYYY(order.createdAt)}</p>
                            </div>
                        </li>


                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Assigned At</p>
                                <p className="text-end">{
                                    order.assignedAt ?
                                        millisecondToHHMMDDmmYYYY(order.assignedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Started At</p>
                                <p className="text-end">{
                                    order.acceptedAt ?
                                        millisecondToHHMMDDmmYYYY(order.acceptedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up arrived at</p>
                                <p className="text-end">{
                                    order.pickUpArriveAt ?
                                        millisecondToHHMMDDmmYYYY(order.pickUpArriveAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Pick up done at</p>
                                <p className="text-end">{
                                    order.pickUpDoneAt ?
                                        millisecondToHHMMDDmmYYYY(order.pickUpDoneAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Delivery arrived at</p>
                                <p className="text-end">{
                                    order.unloadArriveAt ?
                                        millisecondToHHMMDDmmYYYY(order.unloadArriveAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Discharged at</p>
                                <p className="text-end">{
                                    order.unloadDoneAt ?
                                        millisecondToHHMMDDmmYYYY(order.unloadDoneAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Completed At</p>
                                <p className="text-end">{
                                    order.completedAt ?
                                        millisecondToHHMMDDmmYYYY(order.completedAt) :
                                        "Not Yet"
                                }</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Note to driver</p>
                    <p>{order.notesToDriver}</p>
                </div>
            </div>
        </OrderDetailItemContainer>
    )
}

const OrderDetailProducts = ({ order }: OrderDetailSectionProps) => {
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
                        {order?.products?.map(product =>
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

const OrderDetailContact = ({ order }: OrderDetailSectionProps) => {
    return (
        <OrderDetailItemContainer title="Contact">
            <div className="flex flex-col justify-center w-full h-full gap-8 p-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Pick up</p>

                    <ul className="list-disc">
                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact name</p>
                                <p>{order?.pickUpContactName}</p>
                            </div>
                        </li>

                        <li className="ml-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>{order?.pickUpContactNo}</p>
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
                                <p>{order?.unloadContactName}</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p>Contact number</p>
                                <p>{order?.unloadContactNo}</p>
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


const OrderDetailMap = ({ order }: OrderDetailSectionProps) => {
    const markers = [];

    if (order.startingGarage) {
        markers.push({
            lat: order.startingGarage.latitude,
            lng: order.startingGarage.longitude,
            title: "Starting garage"
        })
    }

    if (order.endingGarage) {
        markers.push({
            lat: order.endingGarage.latitude,
            lng: order.endingGarage.longitude,
            title: "Ending garage"
        })
    }


    markers.push(
        {
            lat: order.route.fromLocation.latitude,
            lng: order.route.fromLocation.longitude,
            title: "Departure"
        },
        {
            lat: order.route.toLocation.latitude,
            lng: order.route.toLocation.longitude,
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