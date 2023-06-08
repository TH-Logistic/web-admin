import { useContext } from "react"
import Divider from "../../../components/Divider/Divider"
import { OrderStatusItem } from "../../common/Orders/OrderStatusItem"
import { DashboardContext } from "../DashboardPage"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../../utils/routes"
import { DateTimeFormatter } from "../../../utils"

const DashboardPageRecentOrders = () => {
    const report = useContext(DashboardContext);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full max-h-full gap-4 p-4 border rounded-md border-border-color">
            <div className="sticky flex flex-row items-center justify-between gap-4">
                <p className="text-lg font-semibold">Recent Orders</p>
                <p className="cursor-pointer text-primary-color" onClick={() => navigate(ROUTES.ORDERS)}>View all orders</p>
            </div>

            <div className="flex flex-col gap-4 overflow-auto">
                {
                    report?.recentJobs.map((value) =>
                        <div className="flex flex-col gap-2" onClick={() => navigate(`/orders/${value.id}`)}>
                            <div className="flex flex-row justify-between gap-4 break-words">
                                <p className="underline text-primary-table-color">{value.id}</p>
                                <p>{DateTimeFormatter.millisecondToHHMMDDmmYYYY(value.createdAt)}</p>
                            </div>

                            <div className="flex flex-row justify-between gap-4 break-words">
                                <p className="max-w-[80%]  md:max-w-[60%] truncate">{value.products.join(", ")}</p>
                                <OrderStatusItem status={value.status} />
                            </div>

                            {/* <div>{Intl.NumberFormat().format(Number(value.orderFee))} đ</div> */}

                            <Divider className="my-2" />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export { DashboardPageRecentOrders }