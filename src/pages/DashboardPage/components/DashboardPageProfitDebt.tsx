import { useContext } from "react"
import { DashboardContext } from "../DashboardPage"

const DashboardPageProfitDebt = () => {
    const report = useContext(DashboardContext);

    const totalAmount = (report?.billing.profit.amount ?? 0) + (report?.billing.debt.amount ?? 0);

    const profitPercentage = Math.round(report?.billing.profit.amount ?? 0 / totalAmount * 100);
    const debtPercentage = Math.round(report?.billing.profit.amount ?? 0 / totalAmount * 100);

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color">
            <p className="text-lg font-semibold">Billing</p>

            <div className="flex flex-row h-[4vh] w-full">
                {
                    (profitPercentage === 0 && debtPercentage === 0) ?
                        <p className="self-center w-full font-bold text-center">No Debt Or Profit On Orders!</p> :
                        <div className="flex flex-row w-full h-full">
                            <div style={{ width: `${profitPercentage}%` }} className={`h-full bg-primary-light rounded-l-md`} />
                            <div style={{ width: `${debtPercentage}%` }} className={`h-full flex-1 bg-primary-dark rounded-r-md`} />
                        </div>
                }
            </div>

            <div className="flex flex-row w-full">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-light" />
                        <p>{report?.billing.profit.amount}</p>
                    </div>
                    <p>
                        <span className="font-semibold text-secondary-light">Profit</span> on
                        <span className="font-semibold text-secondary-light"> {report?.billing.profit.totalOrders}</span> orders
                    </p>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-dark" />
                        <p>{report?.billing.debt.amount}</p>
                    </div>
                    <p>
                        <span className="font-semibold text-secondary-light">Debt</span> on
                        <span className="font-semibold text-secondary-light"> {report?.billing.profit.totalOrders}</span> orders
                    </p>
                </div>
            </div>
        </div>
    )
}

export { DashboardPageProfitDebt }