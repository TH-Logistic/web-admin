import { useQuery } from "@tanstack/react-query";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import TransportationItem from "./TransportationItem/TransportationItem";
import { getTransportations } from "../../services/transportation/transportation-service";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function TransportationPage() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery({
    queryKey: ['getTransportations'],
    queryFn: async () => await getTransportations({}),
  });
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row items-center gap-8">
        <Search placeholder="Search by license plate, ..." />
        <Filter />
        <div className="flex-auto" />
        <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_TRUCK)} />
      </div>
      <h1 className="my-8 text-xl font-medium">Transportation</h1>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {(data?.content ?? []).map((transportation) => <TransportationItem item={transportation} key={transportation.id} />)}
      </div>
    </div>
  )
}