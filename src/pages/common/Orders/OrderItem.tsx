import { pascalize } from "humps";
import { Order, OrderStatus } from "../../../entities/order"
import ProductType from "../../ProductPage/Product/ProductType";
import ProductTypeItem from "../../ProductPage/Product/ProductTypeItem";
import { OrderStatusItem } from "./OrderStatusItem";

type OrderItemProps = Order;
const OrderItem = ({ id, licensePlate, driverInCharge, createdAt, pickUpAt, unloadAt, orderFee, status }: OrderItemProps) => {
    return (
        <tr key={id} className="text-center">
            <td className="pt-2 pr-4 text-sm underline text-start text-primary-table-color">{id}</td>
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
                <OrderStatusItem status={status} />
            </td>
        </tr >
    );
}

export { OrderItem }