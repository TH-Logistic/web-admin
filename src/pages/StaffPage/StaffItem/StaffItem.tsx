import { useNavigate } from "react-router-dom"

export default function StaffItem() {
    const navigate = useNavigate();
    return (
        <div className="flex-1 p-4 border rounded-md" onClick={() => navigate('/routes/create')}>
            <div className="flex justify-between">
                <p className="underline decoration-primary-color text-primary-color underline-offset-2">S01</p>

                {/* <p className={`text-user-status-new font-bold rounded-full bg-user-status-new py-1 px-4`}>New</p>
                <p className={`text-user-status-active font-bold rounded-full bg-user-status-active py-1 px-4`}>Active</p>
                <p className={`text-user-status-suspended font-bold rounded-full bg-user-status-suspended py-1 px-4`}>Suspended</p>
                <p className={`text-user-status-resigned font-bold rounded-full bg-user-status-resigned py-1 px-4`}>Resigned</p>
                <p className={`text-user-status-deleted font-bold rounded-full bg-user-status-deleted py-1 px-4`}>Deleted</p> */}

                <p className={`text-user-status-${`new`} rounded-full bg-user-status-${'new'} py-1 px-4`}>New</p>
            </div>
            <p className="text-lg text-secondary-dark">Staff Name</p>
            <div className="h-2" />
            <div className="flex justify-between">
                <p className="text-secondary-light">Email</p>
                <p className="break-words text-end">thinhlh0812@gmail.com</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-secondary-light">Gener</p>
                <p className="text-end">Male</p>
            </div>

            <div className="flex flex-row justify-between">
                <p className="text-secondary-light">Phone number</p>
                <p className="text-end text-secondary-dark">0902514621</p>
            </div>

        </div>
    )
}