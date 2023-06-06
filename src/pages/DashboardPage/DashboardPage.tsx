
import { DashboardPageTotalEarning } from "./components/DashboardPageTotalEarning";
import { DashboardPageProfitDebt } from "./components/DashboardPageProfitDebt";
import { DashboardPageRecentOrders } from "./components/DashboardPageRecentOrders";
import { DashboardPageProducts } from "./components/DashboardPageProducts";
import { DashboardPageOrdersPriceByType } from "./components/DashboardPageOrdersPriceByType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderService } from "../../services/order";
import moment from "moment";
import { Report } from "../../entities/report";
import { createContext, useContext, useState } from "react";
import { DashboardPageSummary } from "./components/DashboardPageSummary";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import InfoDialog from "../../components/Dialog/InfoDialog";

const DashboardContext = createContext<Report | undefined>(undefined);

type DashboardPageProps = {

}
const DashboardPage = (props: DashboardPageProps) => {
    const { data: report, isLoading, error } = useQuery({
        queryKey: ['getDashboard'],
        queryFn: () => OrderService.getReportDashboard(moment().year())
    });

    if (isLoading) {
        return <LoadingDialog />
    }

    if (error || !report) {
        return <InfoDialog success={false} message={error?.toString()} />
    }

    return (
        <DashboardContext.Provider value={report}>
            <div className="flex flex-row gap-4 px-4 my-8 h-[120vh]">
                <div className="flex flex-col gap-8 justify-stretch basis-2/3">
                    <DashboardPageSummary />

                    <div className="h-[40vh]">
                        <DashboardPageTotalEarning />
                    </div>

                    <div className="flex-1 h-full max-h-full overflow-auto">
                        <DashboardPageRecentOrders />
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-8 justify-stretch basis-1/3">
                    <DashboardPageProfitDebt />
                    <div className="flex flex-col justify-between flex-1 gap-8">
                        <div className="flex-1">
                            <DashboardPageProducts />
                        </div>
                        <div className="flex-1">
                            <DashboardPageOrdersPriceByType />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContext.Provider>
    )
}

export {
    DashboardContext,
    DashboardPage
}