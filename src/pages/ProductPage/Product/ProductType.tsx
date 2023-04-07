export default function ProductType(props: { title: string }) {
    return (
        <p className={`text-product-color-${props.title.toLowerCase()} py-1 px-2 border rounded-full w-fit`}>{props.title}</p>
    )
}