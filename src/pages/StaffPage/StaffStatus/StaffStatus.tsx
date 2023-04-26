import { StaffStatus } from "../../../entities/staff";
import { camelizeKeys, pascalize } from 'humps'

type StaffStatusItemProps = {
    status: StaffStatus
}

export default function StaffStatusItem({ status }: StaffStatusItemProps) {
    const statusIdx = Object.values(StaffStatus).indexOf(status);
    const statusKey = Object.keys(StaffStatus)[statusIdx];

    return (
        <p className={`text-user-status-${statusKey.toLowerCase()} rounded-full bg-user-status-${statusKey.toLowerCase()} py-1 px-4`}>
            {camelizeKeys(statusKey)}
        </p>
    )
}