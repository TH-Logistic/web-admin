import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import ProductTypeItem from "../ProductPage/Product/ProductTypeItem";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Edit from '../../assets/edit.svg';
import OrderView from "../common/Orders/OrderView";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/product/product-service";
import { ROUTES } from "../../utils/routes";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import InfoDialog from "../../components/Dialog/InfoDialog";
import { StatisticsItem } from "../common/StatisticItem/StatisticsItem";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductDetailPage() {
    const navigate = useNavigate();
    const { productId } = useParams();

    const { data: productDetail, error, isLoading } = useQuery({
        queryKey: ['getProductById', productId],
        queryFn: productId ? () => ProductService.getProductById(productId) : undefined
    });

    if (!productId) {
        return <Navigate to={ROUTES.PRODUCTS} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }

    return (
        productDetail ?
            (
                <div>
                    <DetailHeader header="Product" id={productId} />
                    <div className="flex flex-row px-8 mt-8">
                        {/* <div className="flex flex-col items-center flex-1">
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
                        </div> */}
                        <div className="flex flex-row flex-1 gap-8">
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="flex flex-row gap-2">
                                    <p className="font-bold">Product's Information</p>
                                    <img src={Edit} alt="Edit Product" onClick={() => {
                                        navigate(`/products/create/${productId}`, {
                                            state: productDetail
                                        })
                                    }} />
                                </div>
                                <div className="flex flex-col h-full gap-4 p-4 border rounded-md border-border-color ">
                                    <div className="flex justify-between">
                                        <p>Product name</p>
                                        <p>{productDetail.product.name}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p>Unit</p>
                                        <p>{productDetail.product.unit}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p>Base Price</p>
                                        <p>{productDetail.product.basePrice}đ (kg/km)</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p>Product type</p>
                                        <ProductTypeItem type={productDetail.product.types[0]} />
                                    </div>
                                </div>
                            </div>

                            <StatisticsItem statistic={productDetail.statistic} />
                        </div>
                    </div>

                    <div className="mx-8 my-16">
                        <OrderView loadNewOrders={false} orders={productDetail.jobs} />
                    </div>
                </div>
            ) :
            (
                <InfoDialog
                    success={false}
                    open
                    onProceedClicked={() => {
                        navigate(-1)
                    }}
                    message={error?.toString()}
                />
            )
    )
}