import { useNavigate } from "react-router-dom"
import { Route } from "../../../entities/route";
import { NumericFormat } from "react-number-format";

type RouteItemProps = {
    item: Route;
}

export default function RouteItem({ item }: RouteItemProps) {
    const navigate = useNavigate();
    return (
        <div className="flex-1 border rounded-md" onClick={() => navigate('/routes/create')}>
            <div className="p-4">
                <div className="flex justify-between">
                    <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>
                    <p className="text-end">{`${item.length} km`}</p>
                </div>
                <div className="flex justify-between gap-4 my-2">
                    <p className="text-secondary-light">From</p>
                    <p className="text-end">{item.fromLocation.name}</p>
                </div>
                <div className="flex justify-between gap-4">
                    <p className="text-secondary-light">To</p>
                    <p className="text-end">{item.toLocation.name}</p>
                </div>
            </div>
            <div className="border" />
            <div className="p-4">
                <div className="flex flex-row justify-between">
                    <p className="text-secondary-light">Trip based cost</p>
                    <NumericFormat value={item.tripBasedCost} suffix=" VND" thousandSeparator className="text-end" />
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-secondary-light">Ton based limit</p>
                    <p className="text-end">{`${item.tonBasedLimit} tons`}</p>
                </div>
            </div>

        </div >
    )
}