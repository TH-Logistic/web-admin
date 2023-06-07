import Filter from "../../../components/Filter/Filter"
import Orders, { OrdersProps } from "./Orders"

type OrderViewProps = OrdersProps;
const OrderView = (props: OrderViewProps) => {
    return (
        <div className="flex flex-col gap-8 h-fit">
            <div className="flex items-center gap-4">
                <p className="font-bold">Orders</p>
                <Filter />
            </div>

            <div className="h-[80vh] mb-8">
                <Orders {...props} />
            </div>
        </div>
    );
}

export default OrderView