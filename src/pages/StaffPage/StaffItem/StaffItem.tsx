import { useNavigate } from "react-router-dom"
import { Staff } from "../../../entities/staff";
import StaffStatusItem from "../StaffStatus/StaffStatus";
import { pascalize } from "humps";

export type StaffItemProps = {
    item: Staff
};

export default function StaffItem({ item }: StaffItemProps) {
    const navigate = useNavigate();
    return (
        <div className="flex-1 p-4 border rounded-md" onClick={() => navigate(`/staffs/${item.id}`, { state: item })}>
            <div className="flex items-center justify-between gap-4">
                <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>

                <StaffStatusItem status={item.status} />
            </div>
            <p className="text-lg text-secondary-dark">{item.name}</p>
            <div className="h-2" />
            <div className="flex justify-between gap-4">
                <p className="text-secondary-light">Email</p>
                <p className="break-words break-all text-end">{item.email}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
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