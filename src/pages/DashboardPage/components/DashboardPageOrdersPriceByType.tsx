import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ProductType from "../../ProductPage/Product/ProductType";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPageOrdersPriceByType = () => {
    return (
        <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color">
            <p className="text-lg font-semibold">Order price by type</p>
            <div className="flex flex-col items-center justify-between flex-1 gap-4">
                <div className="flex-1">
                    <Doughnut
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                        }}
                        data={{
                            labels: [
                                'Trip based',
                                'Ton based'
                            ],
                            datasets: [{
                                borderWidth: 0,
                                data: [80, 120],
                                backgroundColor: [
                                    '#1EB4FD',
                                    '#FAC02C'
                                ],
                                hoverOffset: 4
                            },
                            {
                                borderWidth: 0,
                                data: [80, 120],
                                backgroundColor: [
                                    '#1EB4FDAA',
                                    '#FAC02CAA'
                                ],
                                hoverOffset: 4
                            }]
                        }}
                    />
                </div>

                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center ">
                            <div className="w-5 h-5 mr-2 bg-[#1EB4FD] rounded-md" />
                            <p>Trip based</p>
                        </div>
                        <p>80,000,000đ</p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <div className="w-5 h-5 mr-2 bg-[#FAC02C] rounded-md" />
                            <p>Tons based</p>
                        </div>
                        <p className="break-words">120,000,000đ</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { DashboardPageOrdersPriceByType }