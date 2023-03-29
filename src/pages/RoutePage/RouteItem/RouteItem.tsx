export default function RouteItem() {
    return (
        <div className="flex-1 border rounded-md ">
            <div className="p-4">
                <div className="flex justify-between">
                    <p className="underline decoration-primary-color text-primary-color underline-offset-2">R01</p>
                    <p className="text-end">220km</p>
                </div>
                <div className="flex justify-between my-2">
                    <p className="text-secondary-light">From</p>
                    <p className="text-end">Linh Trung, Thu Duc</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-secondary-light">To</p>
                    <p className="text-end">Quan 10, TPHCM</p>
                </div>
            </div>
            <div className="border" />
            <div className="p-4">
                <div className="flex flex-row justify-between">
                    <p className="text-secondary-light">Trip based cost</p>
                    <p className="text-end">200,000 VND</p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-secondary-light">Ton based limit</p>
                    <p className="text-end">20 tons</p>
                </div>
            </div>

        </div>
    )
}