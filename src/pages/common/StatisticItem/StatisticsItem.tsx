import { Statistic } from "../../../services/common/dto/statistic"

type StatisticsItemProps = {
    statistic: Statistic;
}
const StatisticsItem = ({ statistic }: StatisticsItemProps) => {
    return (
        <div className="flex flex-col flex-1 gap-4">
            <p className="font-bold">Statistic</p>
            <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Number of trips</p>
                        <p>{statistic.totalTripBasedJob + statistic.totalTonBasedJob}</p>
                    </div>
                    <ul className="list-disc [&>li]:ml-6 [&>li]:font-extralight">
                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Trip based</p>
                                <p>{statistic.totalTripBasedJob}</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-row justify-between">
                                <p>Trip based</p>
                                <p>{statistic.totalTonBasedJob}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-between">
                    <p className="font-semibold">Total distance</p>
                    <p>{statistic.totalDistance ?? 0} <i>(km)</i></p>
                </div>

                <div className="flex justify-between">
                    <p className="font-semibold">Total weight</p>
                    <p>{statistic.totalWeight} <i>(unit)</i></p>
                </div>
            </div>
        </div>
    )
}

export { StatisticsItem }