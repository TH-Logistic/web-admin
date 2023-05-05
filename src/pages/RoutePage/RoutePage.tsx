import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import RouteItem from "./RouteItem/RouteItem";
import { useQuery } from "@tanstack/react-query";
import { getRoutes } from "../../services/route/route-service";
import { ROUTES } from "../../routes/routes";

export default function RoutePage() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useQuery({
        queryKey: ['getRoutes'],
        queryFn: async () => await getRoutes({}),
    });
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search placeholder="Search by route code, location name, ..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate(ROUTES.HOME.subroutes?.CREATE_ROUTE.path ?? '')} />
            </div>
            <h1 className="my-8 text-xl font-medium">Routes</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {data?.content.map(item => <RouteItem item={item} />)}
            </div>
        </div>
    )
}