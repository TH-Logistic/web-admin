import { useNavigate } from "react-router-dom"
import ProductType from "./ProductType";

export default function ProductItem() {
    const navigate = useNavigate();
    return (
        <div className="flex-1 max-w-sm border rounded-md">
            <div className="p-4" onClick={() => navigate(`/products/${1}`)}>
                <p className="underline decoration-primary-color text-primary-color underline-offset-2" > FR01</p>
                <div className="flex justify-between my-2">
                    <p className="text-lg">Product Name</p>
                    <p className="text-lg text-end">My Product</p>
                </div>
                <div className="flex justify-between">
                    <p>unit type</p>
                    <p className="text-end">vnd/kg/km</p>
                </div>
            </div >
            <div className="border " />
            <div className="flex items-center gap-2 px-2 py-4 overflow-auto">
                <ProductType title="Dangerous" />
                <ProductType title="Fragile" />
                <ProductType title="Machine" />
                <ProductType title="Electronic" />
                <ProductType title="Agricultural" />
                <ProductType title="Food" />
                <ProductType title="Cosmetic" />
                <ProductType title="Medicine" />
                <ProductType title="Others" />
            </div>

        </div >
    )
}