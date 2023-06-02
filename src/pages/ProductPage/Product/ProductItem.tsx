import { useNavigate } from "react-router-dom"
import ProductTypeItem from "./ProductTypeItem";
import Product from "../../../entities/product";

export type ProductItemProps = React.PropsWithChildren<{
    item: Product;
    navigateOnClick?: boolean;
    chosen?: boolean;
    onClick?: () => void;
}>;

export default function ProductItem({
    item,
    navigateOnClick = true,
    onClick,
    chosen = false,
    ...props
}: ProductItemProps) {
    const navigate = useNavigate();
    return (
        <div className={`flex-1 max-w-sm border rounded-md ${chosen ? 'border-2 border-primary-color' : ``}`}>
            <div className="p-4" onClick={() => {
                onClick?.();
                if (navigateOnClick) {
                    navigate(`/products/${item.id}`)
                }
            }
            } >
                <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2" >{item.id}</p>
                <div className="flex justify-between my-2">
                    <p className="text-lg">{item.name}</p>
                    <p className="text-lg text-end">{item.basePrice}</p>
                </div>
                <div className="flex justify-between">
                    <p>Unit type</p>
                    <p className="text-end">{item.unit}</p>
                </div>
            </div >
            <div className="border " />
            <div className="flex items-center gap-2 px-2 py-4 overflow-auto">


                {/* I don't know why but when I remove these p tag with classes names (these are comments, the color of these tags just disapeared). Placing them here will resolve? */}


                {/* <p className="p-2 border rounded-full text-product-color-dangerous">Dangerous</p>
                <p className="p-2 border rounded-full text-product-color-fragile">Fragile</p>
                <p className="p-2 border rounded-full text-product-color-machine">Machine</p>
                <p className="p-2 border rounded-full text-product-color-electronic">Electronic</p>
                <p className="p-2 border rounded-full text-product-color-agricultural">Agricultural</p>
                <p className="p-2 border rounded-full text-product-color-food">Food</p>
                <p className="p-2 border rounded-full text-product-color-cosmetic">Cosmetic</p>
                <p className="p-2 border rounded-full text-product-color-medicine">Medicine</p>
                <p className="p-2 border rounded-full text-product-color-others">Others</p> */}

                {item.types.map((type) => <ProductTypeItem type={type} key={type} />)}
                {/* <ProductTypeItem type={ProductType.Dangerous} />
                <ProductTypeItem type={ProductType.Fragile} />
                <ProductTypeItem type={ProductType.Machine} />
                <ProductTypeItem type={ProductType.Electronic} />
                <ProductTypeItem type={ProductType.Agricultural} />
                <ProductTypeItem type={ProductType.Food} />
                <ProductTypeItem type={ProductType.Cosmetic} />
                <ProductTypeItem type={ProductType.Medicine} />
                <ProductTypeItem type={ProductType.Others} /> */}
            </div>
        </div >
    )
}