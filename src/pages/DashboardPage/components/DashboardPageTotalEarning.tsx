import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TooltipItem,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { useContext, useMemo } from 'react';

import { Bar } from 'react-chartjs-2';
import { DashboardContext } from '../DashboardPage';
import { FormattedNumber } from 'react-intl';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const formatCurrency = (value: any): string => {
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
        return value;
    }
    else {
        if (numberValue >= 1e9) {
            return Intl.NumberFormat().format(numberValue / 1e9) + " B";
        } else if (numberValue >= 1e6) {
            return Intl.NumberFormat().format(numberValue / 1e6) + " M";
        } else {
            return Intl.NumberFormat().format(numberValue) + " VNĐ";
        }
    }
}

const DashboardPageTotalEarning = () => {
    const report = useContext(DashboardContext);

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => tooltipItems.map(item => formatCurrency(item.parsed.y)),
                    label: () => "Total earnings"
                },
                titleFont: {
                    size: 16,
                    weight: "bold"
                },
                bodyFont: {
                    size: 14
                },
                yAlign: "top",
                titleAlign: "center",
                bodyAlign: "center",
                displayColors: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false
                },
                border: {
                    display: false,
                }
            },
            y: {
                offset: false,
                ticks: {
                    callback: (value: any) => formatCurrency(value),
                    padding: 12,
                    stepSize: 20
                },
                grid: {
                    drawTicks: false,
                },
                border: {
                    display: false,
                    dash: [4, 4],
                    color: "#B2B2B2",
                },

            }
        },
    };

    const data: ChartData<"bar"> = {
        labels: report?.lineChart.map(value => value.month),
        datasets: [
            {
                label: 'Dataset 1',
                data: report?.lineChart.map(value => value.totalPrice) ?? [],
                backgroundColor: '#75CCD0',
            }
        ],
    };

    return (
        <div className='h-full p-4 border rounded-md border-border-color'>
            <div className='flex flex-col items-center w-full h-full gap-4'>
                <p className='self-start font-semibold'>Total earning from orders</p>
                <div className='w-full h-full'>
                    <Bar options={options} data={data} />
                </div>

            </div>
        </div>
    )
}

export { DashboardPageTotalEarning }