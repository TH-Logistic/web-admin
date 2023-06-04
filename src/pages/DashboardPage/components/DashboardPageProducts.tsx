import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ProductType from "../../ProductPage/Product/ProductType";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPageProducts = () => {
    return (
        <div className="flex flex-col h-full max-h-full gap-4 p-4 border rounded-md border-border-color">
            <p className="text-lg font-semibold">Products</p>
            <div className="flex flex-col items-center justify-between flex-1 gap-4">
                <div className="flex-1">
                    <Doughnut
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false,
                                }
                            },
                        }}
                        data={{
                            labels: Object.keys(ProductType).filter(value => isNaN(Number(value))),
                            datasets: [{
                                borderWidth: 0,
                                data: Object.keys(ProductType).filter(value => isNaN(Number(value))).map(value => Math.random() * 100),
                                backgroundColor: [
                                    "#DD4A48",
                                    "#00B4D8",
                                    "#139487",
                                    "#9F5980",
                                    "#ECB390",
                                    "#EDCB3C",
                                    "#91C483",
                                    "#524A4E",
                                    "#FF5C8D"
                                ],
                                hoverOffset: 0
                            },
                            ]
                        }}
                    />
                </div>

                <div className="flex flex-row flex-wrap gap-4">
                    {
                        Object
                            .keys(ProductType)
                            .filter(value => isNaN(Number(value)))
                            .map(type => (
                                <div className="flex flex-row items-center flex-1 gap-4">
                                    {/* <div className="w-4 h-4 bg-product-color-dangerous" />
                                            <div className="w-4 h-4 bg-product-color-fragile" />
                                            <div className="w-4 h-4 bg-product-color-machine" />
                                            <div className="w-4 h-4 bg-product-color-electronic" />
                                            <div className="w-4 h-4 bg-product-color-agricultural" />
                                            <div className="w-4 h-4 bg-product-color-food" />
                                            <div className="w-4 h-4 bg-product-color-cosmetic" />
                                            <div className="w-4 h-4 bg-product-color-medicine" />
                                            <div className="w-4 h-4 bg-product-color-others" /> */}
                                    <div className={`w-4 h-4 rounded-md bg-product-color-${type.toLowerCase()}`} />
                                    <p>{type}</p>
                                </div>
                            ))
                    }
                </div>

            </div>
        </div>
    )
}

export { DashboardPageProducts }