import DashboardOrdersIcon from "./../../assets/dashboard-orders.svg";
import DashboardProductsIcon from "./../../assets/dashboard-products.svg";
import DashboardRoutesIcon from "./../../assets/dashboard-routes.svg";
import DashboardTransportationsIcon from "./../../assets/dashboard-transportations.svg";
import { DashboardPageTotalEarning } from "./components/DashboardPageTotalEarning";
import { DashboardPageProfitDebt } from "./components/DashboardPageProfitDebt";
import { DashboardPageRecentOrders } from "./components/DashboardPageRecentOrders";
import { DashboardPageProducts } from "./components/DashboardPageProducts";
import { DashboardPageOrdersPriceByType } from "./components/DashboardPageOrdersPriceByType";
type DashboardPageProps = {

}
const DashboardPage = (props: DashboardPageProps) => {
    return (
        <div className="flex flex-row gap-4 px-4 my-8 h-[120vh]">
            <div className="flex flex-col gap-8 justify-stretch basis-2/3">
                <DashboardItemCount />

                <div className="h-[40vh]">
                    <DashboardPageTotalEarning />
                </div>

                <div className="flex-1 h-full max-h-full overflow-auto">
                    <DashboardPageRecentOrders />
                </div>
            </div>

            <div className="flex flex-col flex-1 gap-8 justify-stretch basis-1/3">
                <DashboardPageProfitDebt />
                <div className="flex flex-col justify-between flex-1 gap-8">
                    <div className="flex-1">
                        <DashboardPageProducts />
                    </div>
                    <div className="flex-1">
                        <DashboardPageOrdersPriceByType />
                    </div>
                </div>
            </div>
        </div>
    )
}

const DashboardItemCount = () => {
    return (
        <div className="flex flex-row [&>div]:flex-grow gap-8 flex-wrap [&>div]:border [&>div]:border-border-color">
            <div className="flex flex-col gap-4 p-4 border rounded-md ">
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardOrdersIcon} alt="Dashboard Orders Icon" />
                    <p>Orders</p>
                </div>
                <p className="text-xl font-bold">53</p>
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-md">
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardTransportationsIcon} alt="Dashboard Trucks Icon" />
                    <p>Trucks</p>
                </div>
                <p className="text-xl font-bold">17</p>
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-md">
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardProductsIcon} alt="Dashboard Products Icon" />
                    <p>Products</p>
                </div>
                <p className="text-xl font-bold">24</p>
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-md">
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardRoutesIcon} alt="Dashboard Routes Icon" />
                    <p>Routes</p>
                </div>
                <p className="text-xl font-bold">27</p>
            </div>
        </div>
    )
}

export { DashboardPage }