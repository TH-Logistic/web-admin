import { useQuery } from "@tanstack/react-query";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import StaffItem from "./StaffItem/StaffItem";
import { getStaffs } from "../../services/staff/staff-service";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function StaffPage() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useQuery({
        queryKey: ['getStaffs'],
        queryFn: async () => getStaffs(),
    });
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center gap-8">
                <Search placeholder="Search by staff name, ..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_STAFF)} />
            </div>
            <h1 className="my-8 text-xl font-medium">Staff</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {data?.map((item) => <StaffItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}