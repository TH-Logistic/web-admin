import { useNavigate } from "react-router-dom"
import { Staff, StaffStatus } from "../../../entities/staff";
import StaffStatusItem from "../StaffStatus/StaffStatus";

export type StaffItemProps = {
    item: Staff
};

export default function StaffItem({ item }: StaffItemProps) {
    const navigate = useNavigate();
    return (
        <div className="flex-1 p-4 border rounded-md" onClick={() => navigate(`/staffs/${item.id}`)}>
            <div className="flex items-center justify-between gap-4">
                <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>

                {/* <p className={`text-user-status-new font-bold rounded-full bg-user-status-new py-1 px-4`}>New</p>
                <p className={`text-user-status-active font-bold rounded-full bg-user-status-active py-1 px-4`}>Active</p>
                <p className={`text-user-status-suspended font-bold rounded-full bg-user-status-suspended py-1 px-4`}>Suspended</p>
                <p className={`text-user-status-resigned font-bold rounded-full bg-user-status-resigned py-1 px-4`}>Resigned</p>
                <p className={`text-user-status-deleted font-bold rounded-full bg-user-status-deleted py-1 px-4`}>Deleted</p> */}

                <StaffStatusItem status={StaffStatus.New} />
            </div>
            <p className="text-lg text-secondary-dark">{item.name}</p>
            <div className="h-2" />
            <div className="flex justify-between gap-4">
                <p className="text-secondary-light">Email</p>
                <p className="break-words break-all text-end">{item.email}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
                <p className="text-secondary-light">Gener</p>
                <p className="text-end">{item.gender}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p className="text-secondary-light">Phone number</p>
                <p className="text-end text-secondary-dark">{item.phoneNumber}</p>
            </div>

        </div>
    )
}