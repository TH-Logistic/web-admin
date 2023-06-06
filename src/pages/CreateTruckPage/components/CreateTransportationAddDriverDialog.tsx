import { useQuery } from "@tanstack/react-query";
import AppDialog from "../../../components/Dialog/AppDialog"
import Search from "../../../components/Search/Search";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { useState } from "react";
import { DriverService } from "../../../services/driver";
import { Driver } from "../../../entities/driver";
import { StaffStatus } from "../../../entities/staff";

type CreateTransportationAddDriverDialogProps = React.ComponentProps<typeof AppDialog> & {
    onPrimaryClicked: (driver: Driver) => void;
    onSecondaryClicked: () => void;
}
const CreateTransportationAddDriverDialog = ({
    onPrimaryClicked,
    onSecondaryClicked,
    ...props
}: CreateTransportationAddDriverDialogProps) => {
    const { data: drivers, error, isLoading } = useQuery({
        queryKey: ['getDrivers'],
        queryFn: async () => await DriverService.getDrivers(),
    });

    const [chosenDriver, setChosenDriver] = useState<Driver | undefined>(undefined);

    return (
        <AppDialog {...props}>
            <div className="w-[80vw] flex flex-col items-center md:w-[50vw] h-[70vh]">
                <div className="flex flex-col items-center w-3/5 h-full gap-8">
                    <p className="text-lg font-semibold">Add Driver</p>
                    <div className="w-[100%]">
                        <Search placeholder="Search by driver name,..." />
                    </div>

                    <div className="flex-1 w-full p-4 overflow-auto rounded-md outline-1 outline outline-border-color">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="text-start text-primary-table-color">
                                        Name
                                    </th>

                                    <th className="text-primary-table-color">
                                        Status
                                    </th>

                                    <th className="text-end text-primary-table-color">
                                        Gender
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {drivers?.map(driver =>
                                    <tr
                                        key={driver.id}
                                        className={`cursor-pointer hover:text-primary-table-color ${chosenDriver?.id === driver.id ? 'font-semibold' : ''}`}
                                        onClick={() => { setChosenDriver(driver) }}
                                    >
                                        <td className="pt-4 text-sm text-start">
                                            {driver.name}
                                        </td>

                                        <td className="flex items-center justify-center pt-4">
                                            {StaffStatus[driver.status]}
                                        </td>

                                        <td className="pt-4 text-sm text-end">
                                            {driver.gender}
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <ActionButton primary={false} title="Cancel" onClick={() => {
                            onSecondaryClicked()
                            setChosenDriver(undefined)
                        }} />
                        <ActionButton primary disabled={chosenDriver === undefined} title="Add" onClick={() => {
                            onPrimaryClicked(chosenDriver!)
                            setChosenDriver(undefined)
                        }
                        } />
                    </div>
                </div>
            </div>
        </AppDialog>
    )
}

export default CreateTransportationAddDriverDialog;