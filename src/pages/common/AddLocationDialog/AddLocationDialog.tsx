import { useQuery } from "@tanstack/react-query";
import AppDialog from "../../../components/Dialog/AppDialog"
import Search from "../../../components/Search/Search";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { useState } from "react";
import { LocationService } from "../../../services/location";
import { Location } from "../../../entities/location";

type AddLocationDialogProps = React.ComponentProps<typeof AppDialog> & {
    onPrimaryClicked: (location: Location) => void;
    onSecondaryClicked: () => void;
}
const AddLocationDialog = ({
    onPrimaryClicked,
    onSecondaryClicked,
    ...props
}: AddLocationDialogProps) => {
    const { data: locations, error, isLoading } = useQuery({
        queryKey: ['getDelivery'],
        queryFn: async () => await LocationService.getLocations({}),
    });

    const [chosenLocation, setChosenLocation] = useState<Location | undefined>(undefined);

    return (
        <AppDialog {...props}>
            <div className="w-[80vw] flex flex-col items-center md:w-[50vw] h-[70vh]">
                <div className="flex flex-col items-center w-3/5 h-full gap-8">
                    <p className="text-lg font-semibold">Add Delivery Location</p>
                    <div className="w-[100%]">
                        <Search placeholder="Search by address or delivery name" />
                    </div>

                    <div className="flex-1 w-full p-4 overflow-auto rounded-md outline-1 outline outline-border-color">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="[&>th]:whitespace-nowrap [&>th]:font-semibold [&>th]:pr-8">
                                    <th className="text-start text-primary-table-color">
                                        Location Name
                                    </th>

                                    <th className="text-start text-primary-table-color">
                                        Address
                                    </th>

                                    <th className="text-start text-primary-table-color">
                                        id
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {locations?.content.map(location =>
                                    <tr
                                        key={location.id}
                                        className={`cursor-pointer [&>td]:pt-2 whitespace-nowrap hover:text-primary-table-color ${chosenLocation?.id === location.id ? 'font-semibold' : ''}`}
                                        onClick={() => { setChosenLocation(location) }}
                                    >

                                        <td className="pt-4 pr-8">
                                            {location.name}
                                        </td>

                                        <td className="pt-4 pr-8">
                                            {location.address}
                                        </td>

                                        <td className="pt-4 text-sm">
                                            {location.id}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <ActionButton primary={false} title="Cancel" onClick={() => {
                            onSecondaryClicked()
                            setChosenLocation(undefined)
                        }} />
                        <ActionButton primary disabled={chosenLocation === undefined} title="Add" onClick={() => {
                            onPrimaryClicked(chosenLocation!)
                            setChosenLocation(undefined)
                        }}
                        />
                    </div>
                </div>
            </div>
        </AppDialog>
    )
}

export default AddLocationDialog;