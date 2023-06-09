import { useNavigate } from "react-router-dom";
import Orders from "../common/Orders/Orders";
import Filter from "../../components/Filter/Filter";
import ActionButton from "../../components/ActionButton/ActionButton";
import Search from "../../components/Search/Search";
import { ROUTES } from "../../utils/routes";

export default function OrderPage() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-8 m-8">
            <div className="flex flex-row items-center gap-8">
                <Search placeholder="Search by order number, license plates,..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_ORDER)} />
            </div>
            <div className="flex items-center gap-4">
                <p className="text-xl font-bold">Orders</p>
            </div>

            <div className="h-[60vh]">
                <Orders />
            </div>
        </div>

    )
}
