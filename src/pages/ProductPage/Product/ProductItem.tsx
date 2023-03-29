export default function ProductItem() {
    return (
        <div className="flex-1 max-w-sm border rounded-md ">
            <div className="p-4">
                <p className="underline decoration-primary-color text-primary-color underline-offset-2">FR01</p>
                <div className="flex justify-between my-2">
                    <p className="text-lg">Product Name</p>
                    <p className="text-lg text-end">My Product</p>
                </div>
                <div className="flex justify-between">
                    <p>unit type</p>
                    <p className="text-end">vnd/kg/km</p>
                </div>
            </div>
            <div className="border " />
            <div className="flex items-center gap-2 px-2 py-4 overflow-auto">
                <p className="p-2 border rounded-full text-product-color-dangerous">Dangerous</p>
                <p className="p-2 border rounded-full text-product-color-fragile">Fragile</p>
                <p className="p-2 border rounded-full text-product-color-machine">Machine</p>
                <p className="p-2 border rounded-full text-product-color-electronic">Electronic</p>
                <p className="p-2 border rounded-full text-product-color-agricultural">Agricultural</p>
                <p className="p-2 border rounded-full text-product-color-food">Food</p>
                <p className="p-2 border rounded-full text-product-color-cosmetic">Cosmetic</p>
                <p className="p-2 border rounded-full text-product-color-medicine">Medicine</p>
                <p className="p-2 border rounded-full text-product-color-others">Others</p>
            </div>

        </div>
    )
}