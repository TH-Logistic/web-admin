import { useQuery } from "@tanstack/react-query";
import Filter from "../../../components/Filter/Filter"
import Search from "../../../components/Search/Search"
import * as RouteService from "../../../services/route/route-service";
import RouteItem from "../../RoutePage/RouteItem/RouteItem";
import { useState } from "react";
import { Route } from "../../../entities/route";

type CreateOrderPageChooseRouteStepProps = {}

const CreateOrderPageChooseRouteStep = (props: CreateOrderPageChooseRouteStepProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['getRoutes'],
        // queryFn: async () => await RouteService.getRoutes({}),
        queryFn: async () => {
            const routes = Array.from({ length: 20 }, (_, index): Route => ({
                id: index.toString(),
                isEnable: true,
                length: 120,
                tonBasedLimit: 10000,
                tripBasedCost: 2000000,
                fromLocation: {
                    id: 'fromLocationId',
                    address: 'New To Address',
                    latitude: 10.02,
                    longitude: 10.3,
                    name: 'From Address'
                },
                toLocation: {
                    id: 'toLocationId',
                    address: 'New From Address',
                    latitude: 10.02,
                    longitude: 10.3,
                    name: 'From Address'
                }
            }))

            return { content: routes };
        }
    });

    const [chosenRoute, setChosenRoute] = useState<Route | undefined>(undefined);
    return (
        <div className="flex flex-col h-full max-h-full gap-8">
            <div className="flex flex-row w-1/2 gap-4">
                <Search placeholder="Search by route, location name" />
                <Filter />
            </div>

            <div className="grid gap-4 overflow-auto lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
                {data?.content.map(item => <div className="scale-x-95">
                    <RouteItem
                        key={item.id}
                        item={item}
                        chosen={chosenRoute?.id === item.id}
                        onClick={() => {
                            setChosenRoute(item)
                        }}
                    />
                </div>
                )}
            </div>
        </div>
    )
}

export { CreateOrderPageChooseRouteStep }