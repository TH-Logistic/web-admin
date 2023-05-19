import { StaffStatus } from "../../../entities/staff";
import { camelizeKeys, pascalize } from 'humps'

type StaffStatusItemProps = {
    status: StaffStatus
}

export default function StaffStatusItem({ status }: StaffStatusItemProps) {

    const statusValue = StaffStatus[status];

    return (
        <p className={`text-user-status-${statusValue.toLowerCase()} rounded-full bg-user-status-${statusValue.toLowerCase()} py-1 px-4`}>
            {pascalize(statusValue)}
        </p>
    )
}