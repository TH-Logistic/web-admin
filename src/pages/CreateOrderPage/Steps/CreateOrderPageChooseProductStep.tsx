import { useQuery } from "@tanstack/react-query";
import Filter from "../../../components/Filter/Filter"
import Search from "../../../components/Search/Search"
import { getProducts } from "../../../services/product/product-service";
import ProductItem from "../../ProductPage/Product/ProductItem";
import { useState } from "react";
import { Input } from "../../../components/Input/Input";
import Lottie from "lottie-react";
import LottieEmptyState from "../../../assets/lottie_empty_state.json";
import { SubmitHandler, UseFieldArrayReturn, UseFormReturn, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { CreateOrderChosenProduct, CreateOrderChosenProductsInput } from "./CreateOrderPageTypes";

type CreateOrderPageChooseProductStepProps = {
    onSubmit: SubmitHandler<CreateOrderChosenProductsInput>,
    formHook: UseFormReturn<CreateOrderChosenProductsInput>
}


const CreateOrderPageChooseProductStep = ({
    formHook,
    onSubmit
}: CreateOrderPageChooseProductStepProps) => {
    const { data } = useQuery({
        queryKey: ['getProducts'],
        queryFn: async () => await getProducts({}),
    });

    const [chosenProducts, setChosenProducts] = useState<CreateOrderChosenProduct[]>([]);

    const fieldArray = useFieldArray({
        name: "products",
        control: formHook.control,
    });

    return (
        <div className="flex flex-col-reverse h-full gap-8 md:flex-row">
            <div className="flex flex-col flex-1 gap-8">
                <div className="flex flex-row items-center gap-8">
                    <Search placeholder="Search by product name, product type" />
                    <Filter />
                </div>

                <div className="grid max-h-full gap-4 overflow-auto md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
                    {(data?.content ?? []).map((item) => <ProductItem
                        navigateOnClick={false}
                        item={item}
                        key={item.id}
                        chosen={chosenProducts.find(value => value.id === item.id) !== undefined}
                        onClick={() => {
                            const currentItemIdx = chosenProducts.findIndex(value => value.id === item.id);
                            const newChosenProducts = [...chosenProducts];

                            if (currentItemIdx >= 0) {
                                newChosenProducts.splice(currentItemIdx, 1);
                                fieldArray.remove(currentItemIdx);
                            } else {
                                const product: CreateOrderChosenProduct = { ...item, weight: 0 }
                                newChosenProducts.push(product)
                                fieldArray.append(product);
                            }

                            setChosenProducts(newChosenProducts);
                        }}
                    />)}
                </div>

            </div>

            <div className="flex flex-col flex-1 gap-8">
                <p className="text-lg font-semibold">Product list</p>
                <div className="h-full max-h-[90%] rounded-lg outline outline-1 outline-border-color">
                    {
                        chosenProducts.length !== 0
                            ?
                            <form onSubmit={formHook.handleSubmit(onSubmit)}>
                                <ChosenProducts
                                    formHook={formHook}
                                    fieldArray={fieldArray}
                                    products={chosenProducts}
                                />
                            </form>
                            : <ProductNotChose />
                    }
                </div>
            </div>
        </div>

    )
}

type ChosenProductsProps = {
    products: CreateOrderChosenProduct[],
    formHook: UseFormReturn<CreateOrderChosenProductsInput>,
    fieldArray: UseFieldArrayReturn<CreateOrderChosenProductsInput>
}

const ChosenProducts = ({ products, formHook, fieldArray }: ChosenProductsProps) => {
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
                    fieldArray.fields.map((field, index) => {
                        return <tr key={field.id} className="">
                            <td className="pt-2 text-center">{products[index].name}</td>
                            <td className="pt-2 text-center">{products[index].basePrice}</td>
                            <td className="flex flex-row justify-center pt-2">
                                <div>
                                    <Input
                                        placeholder="Weight"
                                        type="number"
                                        error={formHook.formState.errors.products?.[index]?.weight}
                                        register={formHook.register(`products.${index}.weight` as const, {
                                            min: 0,
                                            required: {
                                                value: true,
                                                message: "Weight can not be empty"
                                            },
                                            valueAsNumber: true,
                                        })}
                                        thoundsandSeparator
                                        className="w-20 text-sm text-center placeholder:text-[12px]" />
                                </div>
                            </td>
                        </tr>
                    }

                    )
                }
            </tbody>
        </table>
    );
}

const ProductNotChose = () => {
    return <Lottie animationData={LottieEmptyState} loop className="h-full" />
}

export { CreateOrderPageChooseProductStep }