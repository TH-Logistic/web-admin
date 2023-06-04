import Divider from "../../../components/Divider/Divider"
import { OrderStatus } from "../../../entities/order"
import { OrderStatusItem } from "../../common/Orders/OrderStatusItem"

const DashboardPageRecentOrders = () => {
    return (
        <div className="flex flex-col h-full max-h-full gap-4 p-4 border rounded-md border-border-color">
            <div className="sticky flex flex-row items-center justify-between gap-4">
                <p className="text-lg font-semibold">Recent Orders</p>
                <p className="text-primary-color">View all orders</p>
            </div>

            <div className="flex flex-col gap-4 overflow-auto">
                {
                    Array.from({ length: 10 }).map((value) =>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between gap-4 break-words">
                                <p className="underline text-primary-table-color">3abs</p>
                                <p>23/05/2023</p>
                            </div>

                            <div className="flex flex-row justify-between gap-4 break-words">
                                <p className="max-w-[80%]  md:max-w-[60%] truncate">Product 1's name, Product 1's name, Product 1's name, Product 1's name, ...</p>
                                <OrderStatusItem status={OrderStatus.COMPLETED} />
                            </div>

                            <Divider className="my-2" />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export { DashboardPageRecentOrders }