import { pascalize } from "humps";
import { Order, OrderStatus } from "../../../entities/order"
import ProductType from "../../ProductPage/Product/ProductType";
import ProductTypeItem from "../../ProductPage/Product/ProductTypeItem";

type OrderItemProps = Order;
const OrderItem = ({ id, licensePlate, driverInCharge, createdAt, pickUpAt, unloadAt, orderFee, status }: OrderItemProps) => {
    return (
        <tr key={id} className="text-center">
            <td className="pr-4 text-sm underline text-start text-primary-table-color">{id}</td>
            < td className="">{licensePlate}</td>
            <td className="">{driverInCharge}</td>
            <td>
                <div className="flex items-center justify-center">
                    <ProductTypeItem type={ProductType.Dangerous} />
                </div>
            </td>
            <td className="">{createdAt}</td>
            <td className="">{pickUpAt}</td>
            <td className="">{unloadAt}</td>
            <td className="">{orderFee}</td>
            <td className="">
                {/* <p className={`rounded-full text-order-status-open bg-order-status-open`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-assigned bg-order-status-assigned`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-job_started bg-order-status-job_started`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-pick_up_arrived bg-order-status-pick_up_arrived`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-pick_up_done bg-order-status-pick_up_done`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-delivery_arrived bg-order-status-delivery_arrived`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-discharged bg-order-status-discharged`}>
                    {pascalize(OrderStatus[status])}
                </p>
                <p className={`rounded-full text-order-status-completed bg-order-status-completed`}>
                    {pascalize(OrderStatus[status])}
                </p> */}

                <p className={`py-1 rounded-full text-order-status-${OrderStatus[status].toLowerCase()} bg-order-status-${OrderStatus[status].toLowerCase()}`}>
                    {pascalize(OrderStatus[status])}
                </p>
            </td>
        </tr >
    );
}

export { OrderItem }