import ProductType from "./ProductType";

export default function ProductTypeItem(props: { type: ProductType }) {
    return (
        <p className={`text-product-color-${ProductType[props.type].toLowerCase()} py-1 px-2 border rounded-full w-fit`}>{ProductType[props.type]}</p>
    )
}