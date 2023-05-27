import { pascalize } from "humps"
import { OrderStatus } from "../../../entities/order"

type OrderStatusItemProps = {
    status: OrderStatus,
    className?: string
}

const OrderStatusItem = ({ status, className }: OrderStatusItemProps) => {
    return (
        <>
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

            <p className={`${className} py-1 rounded-full text-order-status-${OrderStatus[status].toLowerCase()} bg-order-status-${OrderStatus[status].toLowerCase()} `}>
                {pascalize(OrderStatus[status])}
            </p>
        </>
    )
}

export { OrderStatusItem }