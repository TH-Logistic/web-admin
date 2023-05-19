import { useNavigate } from "react-router-dom"
import { Driver } from "../../../entities/driver";
import { millesecondToString } from "../../../utils/formatter";
import { StaffStatus } from "../../../entities/staff";
import { pascalize } from "humps";
import StaffStatusItem from "../../StaffPage/StaffStatus/StaffStatus";

export type DriverItemProps = {
    item: Driver
};

export default function DriverItem({ item }: DriverItemProps) {
    const navigate = useNavigate();
    return (
        <div className="flex-1 p-4 border rounded-md" onClick={() => navigate(`/drivers/${item.id}`, { state: item })}>
            <div className="flex justify-between gap-4">
                <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>

                <div>
                    <StaffStatusItem status={item.status} />
                </div>
            </div>
            <p className="text-lg text-secondary-dark">{item.name}</p>
            <div className="h-2" />
            <div className="flex justify-between">
                <p className="text-secondary-light">DOB</p>
                <p className="break-words text-end">{millesecondToString(item.birthday)}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-secondary-light">Gener</p>
                <p className="text-end">{pascalize(item.gender)}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p className="text-secondary-light">Phone number</p>
                <p className="text-end text-secondary-dark">{item.phoneNumber}</p>
            </div>

        </div>
    )
}