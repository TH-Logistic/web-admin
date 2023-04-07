import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate, useParams } from "react-router-dom"
import ArrowLeftIcon from '../../assets/arrow-left.svg';
import { Doughnut } from "react-chartjs-2";
import ProductType from "../ProductPage/Product/ProductType";
import Filter from "../../components/Filter/Filter";
import OrderPage from "../OrderPage/OrderPage";
import Orders from "../common/Orders/Orders";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex items-center p-8'>
                <img src={ArrowLeftIcon} alt="close" className='w-2 mr-6' onClick={() => navigate(-1)} />
                <p className='text-lg font-semibold'>Product</p>
                <p className='ml-4 text-lg font-bold text-primary-color'>PR01</p>
            </div>
            <div className='border-t-[1px] border-border-color' />

            <div className="flex flex-row px-8 mt-16">
                <div className="flex flex-col items-center flex-1">
                    <div className="w-[60%]">
                        <Doughnut options={{
                            plugins: {
                                legend: {
                                    // labels: {
                                    //     pointStyle: 'rectRounded',
                                    //     usePointStyle: true,
                                    //     boxHeight: 30,
                                    //     boxWidth: 30,
                                    // },
                                    display: false,
                                    position: 'bottom',
                                }
                            }
                        }} data={{
                            labels: [
                                // 'Red',
                                'Trip based',
                                'Ton based'
                            ],
                            datasets: [{
                                borderWidth: 0,
                                data: [80, 120],
                                backgroundColor: [
                                    // 'rgb(255, 99, 132)',
                                    '#1EB4FD',
                                    '#FAC02C'
                                ],
                                hoverOffset: 4
                            },
                            {
                                borderWidth: 0,
                                data: [80, 120],
                                backgroundColor: [
                                    // 'rgb(255, 99, 132)',
                                    '#1EB4FDAA',
                                    '#FAC02CAA'
                                ],
                                hoverOffset: 4
                            }
                            ]
                        }} />

                        <div className="flex flex-col gap-4 mt-4 " >
                            <div className="flex flex-row justify-between">
                                <p>Total</p>
                                <p>200,000,000đ</p>
                            </div>

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
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="mb-4 font-bold">Product's Information</p>
                            <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                                <div className="flex justify-between">
                                    <p>Product name</p>
                                    <p>Frames</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Unit</p>
                                    <p>Ton</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Base Price</p>
                                    <p>200đ (kg/km)</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Product type</p>
                                    <ProductType title="Fragile" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mb-4 font-bold">Statistic</p>
                            <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Number of trips</p>
                                    <p>23</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold">Total distance</p>
                                    <p>200 (km)</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold">Total weight</p>
                                    <p>200 (unit)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-16 h-fit">
                <div className="flex items-center gap-4">
                    <p className="font-bold">Orders</p>
                    <Filter />
                </div>

                <div className="h-[80vh] mb-8">
                    <Orders />
                </div>
            </div>
        </div>
    )
}