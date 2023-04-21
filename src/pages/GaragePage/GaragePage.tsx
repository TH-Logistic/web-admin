import { Outlet } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import GarageItem from "./GarageItem/GarageItem";
import { useQuery } from "@tanstack/react-query";
import { getGarages } from "../../services/garage/garage-service";

export default function GaragePage() {

  const { data, error, isLoading } = useQuery({
    queryKey: ['getGarages'],
    queryFn: async () => getGarages(),
  });


  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row items-center">
        <Search placeholder="Search by garage name, address,..." />
        <Filter />
        <div className="flex-auto" />
        <ActionButton title="+ Create" />
      </div>
      <h1 className="my-8 text-xl font-medium">Garage</h1>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {(data?.content ?? []).map((garage) => <GarageItem item={garage} key={garage.id} />)}
      </div>
    </div>
  )
}
