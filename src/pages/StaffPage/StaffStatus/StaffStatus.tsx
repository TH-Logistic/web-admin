import { StaffStatus } from "../../../entities/staff";
import { camelizeKeys, pascalize } from 'humps'

type StaffStatusItemProps = {
    status: StaffStatus
}

export default function StaffStatusItem({ status }: StaffStatusItemProps) {

    const statusValue = StaffStatus[status];

    return (
        <>
            {/* <p className={`text-user-status-new rounded-full bg-user-status-new py-1 px-4`}>
                {pascalize(statusValue)}
            </p>
            <p className={`text-user-status-active rounded-full bg-user-status-active py-1 px-4`}>
                {pascalize(statusValue)}
            </p>
            <p className={`text-user-status-suspended rounded-full bg-user-status-suspended py-1 px-4`}>
                {pascalize(statusValue)}
            </p>
            <p className={`text-user-status-resigned rounded-full bg-user-status-resigned py-1 px-4`}>
                {pascalize(statusValue)}
            </p>
            <p className={`text-user-status-deleted rounded-full bg-user-status-deleted py-1 px-4`}>
                {pascalize(statusValue)}
            </p> */}
            <p className={`text-user-status-${statusValue.toLowerCase()} rounded-full bg-user-status-${statusValue.toLowerCase()} py-1 px-4`}>
                {pascalize(statusValue)}
            </p>
        </>
    )
}