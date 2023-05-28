import ProductType from "./ProductType";

export default function ProductTypeItem({ type, className }: { type: ProductType, className?: string }) {
    return (
        <p className={`${className} text-product-color-${ProductType[type].toLowerCase()} py-1 px-2 border rounded-full w-fit`}>{ProductType[type]}</p>
    )
}