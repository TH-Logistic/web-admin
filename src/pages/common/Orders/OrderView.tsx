import Filter from "../../../components/Filter/Filter"
import Orders from "./Orders"

type OrderViewProps = object;
const OrderView = (props: OrderViewProps) => {
    return (
        <div className="flex flex-col gap-8 mx-8 my-16 h-fit">
            <div className="flex items-center gap-4">
                <p className="font-bold">Orders</p>
                <Filter />
            </div>

            <div className="h-[80vh] mb-8">
                <Orders />
            </div>
        </div>
    );
}

export default OrderView