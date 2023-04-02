import { Outlet } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import GarageItem from "./GarageItem/GarageItem";

export default function GaragePage() {
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row items-center">
        <Search />
        <Filter />
        <div className="flex-auto" />
        <ActionButton />
      </div>
      <h1 className="my-8 text-xl font-medium">Garage</h1>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {Array(10).fill(<GarageItem />)}
      </div>
    </div>
  )
}
