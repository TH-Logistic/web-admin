import { useQuery } from "@tanstack/react-query";
import AppDialog from "../../../components/Dialog/AppDialog"
import * as TransportationService from "../../../services/transportation/transportation-service";
import Search from "../../../components/Search/Search";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { useState } from "react";
import { Transportation } from "../../../entities/transportation";

type OrderDetailAddTransportationDialogProps = React.ComponentProps<typeof AppDialog> & {
    onPrimaryClicked: (transportation: Transportation) => void;
    onSecondaryClicked: () => void;
}
const OrderDetailAddTransportationDialog = ({
    onPrimaryClicked,
    onSecondaryClicked,
    ...props
}: OrderDetailAddTransportationDialogProps) => {
    const { data: transportations, error, isLoading } = useQuery({
        queryKey: ['getTransportations'],
        queryFn: async () => await TransportationService.getTransportations({}),
    });

    const [chosenTransportation, setChosenTransportation] = useState<Transportation | undefined>(undefined);

    return (
        <AppDialog {...props}>
            <div className="w-[80vw] flex flex-col items-center md:w-[50vw] h-[70vh]">
                <div className="flex flex-col items-center w-3/5 h-full gap-8">
                    <p className="text-lg font-semibold">Add Transportation</p>
                    <div className="w-[100%]">
                        <Search placeholder="Search by license plate or garage name" />
                    </div>

                    <div className="flex-1 w-full p-4 overflow-auto rounded-md outline-1 outline outline-border-color">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="text-start text-primary-table-color">
                                        License plate
                                    </th>

                                    <th className="text-primary-table-color">
                                        Garage
                                    </th>

                                    <th className="text-end text-primary-table-color">
                                        Distance to pickup
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {transportations?.content.map(transportation =>
                                    <tr
                                        key={transportation.id}
                                        className={`cursor-pointer hover:text-primary-table-color ${chosenTransportation?.id === transportation.id ? 'font-semibold' : ''}`}
                                        onClick={() => { setChosenTransportation(transportation) }}
                                    >
                                        <td className="pt-4 text-sm text-start">
                                            {transportation.licensePlate}
                                        </td>

                                        <td className="flex items-center justify-center pt-4">
                                            {transportation.garage.name}
                                        </td>

                                        <td className="pt-4 text-sm text-end">
                                            {transportation.garage.latitude}
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <ActionButton primary={false} title="Cancel" onClick={() => {
                            onSecondaryClicked()
                            setChosenTransportation(undefined)
                        }} />
                        <ActionButton primary disabled={chosenTransportation === undefined} title="Add" onClick={() => {
                            onPrimaryClicked(chosenTransportation!)
                            setChosenTransportation(undefined)
                        }
                        } />
                    </div>
                </div>
            </div>
        </AppDialog>
    )
}

export default OrderDetailAddTransportationDialog;