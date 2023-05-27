import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import DeliveryItem from "./DeliveryItem/DeliveryItem";
import { getLocations } from "../../services/location/location-service";
import { useQuery } from "@tanstack/react-query";
import { ROUTES } from "../../utils/routes";

export default function DeliveryPage() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery({
    queryKey: ['getLocations'],
    queryFn: async () => getLocations({}),
  });
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row items-center">
        <Search placeholder="Search by location name, address,..." />
        <Filter />
        <div className="flex-auto" />
        <ActionButton title="+ Create" onClick={() => navigate(ROUTES.CREATE_DELIVERY)} />
      </div>
      <h1 className="my-8 text-xl font-medium">Delivery</h1>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {data?.content.map((item) => <DeliveryItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}
