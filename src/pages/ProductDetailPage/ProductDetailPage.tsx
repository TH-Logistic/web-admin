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
                        <OrderView orders={productDetail.jobs} />
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