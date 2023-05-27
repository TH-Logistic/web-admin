import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import OrganizationItem from "./OrganizationItem/OrganizationItem";
import { useQuery } from "@tanstack/react-query";
import { getOrganizations } from "../../services/organization/organization-service";
import { ROUTES } from "../../utils/routes";

export default function OrganizationPage() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useQuery({
        queryKey: ['getOrganizations'],
        queryFn: async () => await getOrganizations({}),
    });
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search placeholder="Search by organization name, contact, ..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_ORGANIZATION)} />
            </div>
            <h1 className="my-8 text-xl font-medium">Organization</h1>
            <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                {data?.content?.map(item => <OrganizationItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}