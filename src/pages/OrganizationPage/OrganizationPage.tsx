import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import OrganizationItem from "./OrganizationItem/OrganizationItem";

export default function OrganizationPage() {
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" />
            </div>
            <h1 className="my-8 text-xl font-medium">Garage</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {Array(10).fill(<OrganizationItem />)}
            </div>
        </div>
    )
}