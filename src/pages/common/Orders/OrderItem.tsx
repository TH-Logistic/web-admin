import { Order } from "../../../entities/order"
import { DateTimeFormatter } from "../../../utils";
import ProductType from "../../ProductPage/Product/ProductType";
import ProductTypeItem from "../../ProductPage/Product/ProductTypeItem";
import { OrderStatusItem } from "./OrderStatusItem";
import { useNavigate } from "react-router-dom";

type OrderItemProps = Order;
const OrderItem = ({ id, licensePlate, driverInCharge, products, createdAt, pickUpAt, unloadAt, orderFee, status }: OrderItemProps) => {
    const navigate = useNavigate();
    return (
        <tr key={id} className="text-center cursor-pointer" onClick={() => navigate(`/orders/${id}`)}>
            <td className="pt-2 pr-4 text-sm font-semibold underline text-start text-primary-table-color">{id}</td>
            <td className="">{licensePlate}</td>
            <td className="">{driverInCharge}</td>
            <td>
                {products.slice(0, 3).map(product => <p>{product}</p>)
                }
            </td>
            <td className="">{DateTimeFormatter.millisecondToHHMMDDmmYYYY(createdAt)}</td>
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