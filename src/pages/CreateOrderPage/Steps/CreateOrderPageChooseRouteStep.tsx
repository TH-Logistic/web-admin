import { useQuery } from "@tanstack/react-query";
import Filter from "../../../components/Filter/Filter"
import Search from "../../../components/Search/Search"
import * as RouteService from "../../../services/route/route-service";
import RouteItem from "../../RoutePage/RouteItem/RouteItem";
import { useEffect, useRef, useState } from "react";
import { Route } from "../../../entities/route";

type CreateOrderPageChooseRouteStepProps = {
    onChooseRoute: (route?: Route) => void;
}

const CreateOrderPageChooseRouteStep = ({
    onChooseRoute
}: CreateOrderPageChooseRouteStepProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['getRoutes'],
        queryFn: async () => await RouteService.getRoutes({}),
    });

    const [chosenRoute, setChosenRoute] = useState<Route | undefined>(undefined);

    const notInitialRender = useRef(false)
    useEffect(() => {
        if (notInitialRender.current) {
            onChooseRoute(chosenRoute);
        } else {
            notInitialRender.current = true;
        }
    }, [chosenRoute, onChooseRoute]);

    return (
        <div className="flex flex-col h-full max-h-full gap-8">
            <div className="flex flex-row w-1/2 gap-4">
                <Search placeholder="Search by route, location name" />
                <Filter />
            </div>

            <div className="grid gap-4 overflow-auto lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2">
                {data?.content.map(item =>
                    <div
                        key={item.id}
                        className="scale-x-95">
                        <RouteItem
                            item={item}
                            chosen={chosenRoute?.id === item.id}
                            onClick={() => {
                                if (chosenRoute?.id === item.id) {
                                    setChosenRoute(undefined);
                                } else {
                                    setChosenRoute(item)
                                }
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export { CreateOrderPageChooseRouteStep }