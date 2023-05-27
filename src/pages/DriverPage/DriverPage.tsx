import { useQuery } from "@tanstack/react-query";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import DriverItem from "./DriverItem/DriverItem";
import { useNavigate } from "react-router-dom";
import { getDrivers } from "../../services/driver/driver-service";
import { ROUTES } from "../../utils/routes";


export default function DriverPage() {
    const navigate = useNavigate();
    const { data } = useQuery({
        queryKey: ['getDrivers'],
        queryFn: getDrivers,
    });
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search placeholder="Search by staff name, ..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_DRIVER)} />
            </div>
            <h1 className="my-8 text-xl font-medium">Driver</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {data?.map((item) => <DriverItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}