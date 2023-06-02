import { useQuery } from "@tanstack/react-query";
import AppDialog from "../../../components/Dialog/AppDialog"
import * as GarageService from "../../../services/garage/garage-service";
import Search from "../../../components/Search/Search";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { useState } from "react";
import { Garage } from "../../../entities/garage";

type OrderDetailAddEndingGarageDialogProps = React.ComponentProps<typeof AppDialog> & {
    onPrimaryClicked: (garage: Garage) => void;
    onSecondaryClicked: () => void;
}
const OrderDetailAddEndingGarageDialog = ({
    onPrimaryClicked,
    onSecondaryClicked,
    ...props
}: OrderDetailAddEndingGarageDialogProps) => {
    const { data: garages, error, isLoading } = useQuery({
        queryKey: ['getGarages'],
        queryFn: async () => await GarageService.getGarages({}),
    });

    const [chosenGarage, setChosenGarage] = useState<Garage | undefined>(undefined);

    return (
        <AppDialog {...props}>
            <div className="w-[80vw] flex flex-col items-center md:w-[50vw] h-[70vh]">
                <div className="flex flex-col items-center w-3/5 h-full gap-8">
                    <p className="text-lg font-semibold">Add Garage</p>
                    <div className="w-[100%]">
                        <Search placeholder="Search by address or garage name" />
                    </div>

                    <div className="flex-1 w-full p-4 overflow-auto rounded-md outline-1 outline outline-border-color">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="text-start text-primary-table-color">
                                        Location ID
                                    </th>

                                    <th className="text-start text-primary-table-color">
                                        Location Name
                                    </th>

                                    <th className="text-primary-table-color">
                                        Address
                                    </th>

                                    <th className="text-end text-primary-table-color">
                                        Distance to garage
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {garages?.content.map(garage =>
                                    <tr
                                        key={garage.id}
                                        className={`cursor-pointer hover:text-primary-table-color ${chosenGarage?.id === garage.id ? 'font-semibold' : ''}`}
                                        onClick={() => { setChosenGarage(garage) }}
                                    >
                                        <td className="pt-4 text-sm text-start">
                                            {garage.id}
                                        </td>

                                        <td className="flex items-center justify-center pt-4">
                                            {garage.name}
                                        </td>


                                        <td className="flex items-center justify-center pt-4">
                                            {garage.address}
                                        </td>

                                        <td className="pt-4 text-sm text-end">
                                            {garage.latitude}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <ActionButton primary={false} title="Cancel" onClick={() => {
                            onSecondaryClicked()
                            setChosenGarage(undefined)
                        }} />
                        <ActionButton primary disabled={chosenGarage === undefined} title="Add" onClick={() => {
                            onPrimaryClicked(chosenGarage!)
                            setChosenGarage(undefined)
                        }
                        } />
                    </div>
                </div>
            </div>
        </AppDialog>
    )
}

export default OrderDetailAddEndingGarageDialog;