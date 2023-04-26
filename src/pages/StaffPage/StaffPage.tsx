import { useQuery } from "@tanstack/react-query";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import StaffItem from "./StaffItem/StaffItem";
import { getStaffs } from "../../services/staff/staff-service";

export default function StaffPage() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['getStaffs'],
        queryFn: async () => getStaffs(),
    });
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search placeholder="Search by staff name, ..." />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" />
            </div>
            <h1 className="my-8 text-xl font-medium">Staff</h1>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {data?.map((item) => <StaffItem item={item} />)}
            </div>
        </div>
    )
}