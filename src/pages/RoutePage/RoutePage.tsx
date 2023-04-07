import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import RouteItem from "./RouteItem/RouteItem";

export default function RoutePage() {
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" />
            </div>
            <h1 className="my-8 text-xl font-medium">Routes</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {Array(10).fill(<RouteItem />)}
            </div>
        </div>
    )
}