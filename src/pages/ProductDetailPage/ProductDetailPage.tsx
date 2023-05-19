import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Doughnut } from "react-chartjs-2";
import ProductTypeItem from "../ProductPage/Product/ProductTypeItem";
import Filter from "../../components/Filter/Filter";
import Orders from "../common/Orders/Orders";
import ProductType from "../ProductPage/Product/ProductType";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Edit from '../../assets/edit.svg';
import Product from "../../entities/product";
import OrderView from "../common/Orders/OrderView";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const product: Product = location.state;
    return (
        <div>
            <DetailHeader header="Product" id={productId!} />
            <div className="flex flex-row px-8 mt-16">
                <div className="flex flex-col items-center flex-1">
                    <div className="w-[60%]">
                        <Doughnut options={{
                            plugins: {
                                legend: {
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
                            <div className="flex flex-row gap-2 mb-4">
                                <p className="font-bold">Product's Information</p>
                                <img src={Edit} alt="Edit Product" onClick={() => {
                                    navigate(`/products/create/${productId}`, {
                                        state: product
                                    })
                                }} />
                            </div>
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
                                    <ProductTypeItem type={ProductType.Fragile} />
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

            <div className="mx-8 my-16">
                <OrderView />
            </div>
        </div>
    )
}