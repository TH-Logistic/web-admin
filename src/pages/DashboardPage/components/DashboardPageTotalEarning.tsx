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
import { useMemo } from 'react';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const DashboardPageTotalEarning = () => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => tooltipItems.map(item => item.parsed.y.toString()),
                    label: () => "Total earnings"
                },
                titleFont: {
                    size: 16,
                    weight: "bold"
                },
                bodyFont: {
                    size: 14
                },
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
                    callback: (value: any) => value + "m",
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

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const data: ChartData<"bar"> = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random() * 100),
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