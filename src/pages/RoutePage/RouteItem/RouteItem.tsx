import { Route } from "../../../entities/route";
import { NumericFormat } from "react-number-format";

type RouteItemProps = {
    item: Route;
    chosen?: boolean;
    onClick?: () => void,

}

export default function RouteItem({
    item,
    chosen,
    onClick,
}: RouteItemProps) {
    return (
        <div className={`flex-1 box-content border rounded-md ${chosen ? "border-2 border-primary-color" : ""}`} onClick={onClick}>
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
                    <NumericFormat
                        displayType="text"
                        value={item.tripBasedCost}
                        suffix=" VND"
                        thousandSeparator
                        className="text-end"
                    />
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-secondary-light">Ton based limit</p>
                    <p className="text-end">{`${item.tonBasedLimit} tons`}</p>
                </div>
            </div>

        </div >
    )
}