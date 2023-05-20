import { useQuery } from "@tanstack/react-query";
import Filter from "../../../components/Filter/Filter"
import Search from "../../../components/Search/Search"
import { getProducts } from "../../../services/product/product-service";
import ProductItem from "../../ProductPage/Product/ProductItem";
import { useEffect, useState } from "react";
import Product from "../../../entities/product";
import { Input } from "../../../components/Input/Input";
import Lottie from "lottie-react";
import LottieEmptyState from "../../../assets/lottie_empty_state.json";

type CreateOrderPageChooseProductStepProps = {}
type ChosenProductProps = Product & {
    weight: number;
}

const CreateOrderPageChooseProductStep = (props: CreateOrderPageChooseProductStepProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['getProducts'],
        queryFn: async () => await getProducts({}),
    });

    const [products, setProducts] = useState<Product[]>();
    const [chosenProducts, setChosenProducts] = useState<ChosenProductProps[]>([]);

    useEffect(() => {
        setProducts(data?.content)
    }, [data])
    return (
        <div className="flex flex-col-reverse gap-8 md:flex-row">
            <div className="flex flex-col flex-1 gap-8">
                <div className="flex">
                    <Search placeholder="Search by product name, product type" />
                    <Filter />
                </div>

                <div className="grid gap-4 h-full overflow-auto md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 max-h-[50vh]">
                    {(products ?? []).map((item) => <ProductItem
                        navigateOnClick={false}
                        item={item}
                        key={item.id}
                        chosen={chosenProducts.find(value => value.id === item.id) !== undefined}
                        onClick={() => {
                            const currentItemIdx = chosenProducts.findIndex(value => value.id === item.id);
                            const newChosenProducts = [...chosenProducts];

                            if (currentItemIdx >= 0) {
                                newChosenProducts.splice(currentItemIdx, 1);
                            } else {
                                newChosenProducts.push({ ...item, weight: 0 });
                            }

                            setChosenProducts(newChosenProducts);
                        }}
                    />)}
                </div>

            </div>

            <div className="flex flex-col flex-1 gap-8">
                <p className="text-lg font-semibold">Product list</p>

                <div className="w-full h-[60vh] rounded-lg outline outline-border-color" >
                    {
                        chosenProducts.length !== 0
                            ? <ChosenProducts products={chosenProducts} />
                            : <ProductNotChose />
                    }

                </div>
            </div>
        </div>

    )
}

const ChosenProducts = ({ products }: { products: ChosenProductProps[] }) => {
    return (
        <table className="w-full max-w-[100%] my-8 table-fixed">
            <thead>
                <tr>
                    {
                        ['Product List', 'Price', 'Weight']
                            .map(
                                (header) =>
                                    <th key={header} className="font-semibold text-center text-primary-table-color">
                                        {header}
                                    </th>
                            )
                    }
                </tr>
            </thead>
            <tbody className="before:block before:h-4 before:content-['']">
                {
                    products.map((value) =>
                        <tr key={value.id} className="">
                            <td className="pt-2 text-center">{value.name}</td>
                            <td className="pt-2 text-center">{value.basePrice}</td>
                            <td className="flex flex-row justify-center pt-2">
                                <div>
                                    <Input
                                        placeholder="Weight"
                                        type="number"
                                        thoundsandSeparator
                                        value={value.weight}
                                        className="w-20 text-sm text-center placeholder:text-[12px]" />
                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

const ProductNotChose = () => {
    return <Lottie animationData={LottieEmptyState} loop />
}

export { CreateOrderPageChooseProductStep }