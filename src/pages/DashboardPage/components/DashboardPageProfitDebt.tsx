const DashboardPageProfitDebt = () => {
    return (
        <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color">
            <p className="text-lg font-semibold">Billing</p>

            <div className="flex flex-row h-[4vh] w-full">
                <div className="w-full h-full bg-primary-light rounded-l-md" />
                <div className="w-full h-full bg-primary-dark rounded-r-md" />
            </div>

            <div className="flex flex-row w-full">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-light" />
                        <p>25,000,000</p>
                    </div>
                    <p>
                        <span className="font-semibold text-secondary-light">Profit</span> on
                        <span className="font-semibold text-secondary-light"> 23</span> orders
                    </p>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-dark" />
                        <p>25,000,000</p>
                    </div>
                    <p>
                        <span className="font-semibold text-secondary-light">Debt</span> on
                        <span className="font-semibold text-secondary-light"> 23</span> orders
                    </p>
                </div>
            </div>
        </div>
    )
}

export { DashboardPageProfitDebt }