import { useContext } from "react";
import DashboardOrdersIcon from "./../../../assets/dashboard-orders.svg";
import DashboardProductsIcon from "./../../../assets/dashboard-products.svg";
import DashboardRoutesIcon from "./../../../assets/dashboard-routes.svg";
import DashboardTransportationsIcon from "./../../../assets/dashboard-transportations.svg";
import { DashboardContext } from "../DashboardPage";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const DashboardPageSummary = () => {
    const navigate = useNavigate();
    const report = useContext(DashboardContext);
    return (
        <div className="flex flex-row [&>div]:flex-grow gap-8 flex-wrap [&>div]:border [&>div]:border-border-color">
            <div className="flex flex-col gap-4 p-4 border rounded-md hover:shadow-xl" onClick={() => navigate(ROUTES.ORDERS)}>
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardOrdersIcon} alt="Dashboard Orders Icon" />
                    <p>Orders</p>
                </div>
                <p className="text-xl font-bold">{report?.totalOrders}</p>
            </div>

            <div className="flex flex-col gap-4 p-4 border rounded-md hover:shadow-xl" onClick={() => navigate(ROUTES.TRUCKS)}>
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardTransportationsIcon} alt="Dashboard Trucks Icon" />
                    <p>Trucks</p>
                </div>
                <p className="text-xl font-bold">{report?.totalTrucks}</p>
            </div>

            <div className="flex flex-col gap-4 p-4 border rounded-md hover:shadow-xl" onClick={() => navigate(ROUTES.PRODUCTS)}>
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardProductsIcon} alt="Dashboard Products Icon" />
                    <p>Products</p>
                </div>
                <p className="text-xl font-bold">{report?.totalProducts}</p>
            </div>

            <div className="flex flex-col gap-4 p-4 border rounded-md hover:shadow-xl" onClick={() => navigate(ROUTES.ROUTES)}>
                <div className="flex flex-row items-center gap-4">
                    <img src={DashboardRoutesIcon} alt="Dashboard Routes Icon" />
                    <p>Routes</p>
                </div>
                <p className="text-xl font-bold">{report?.totalRoutes}</p>
            </div>
        </div>
    )
}

export { DashboardPageSummary }