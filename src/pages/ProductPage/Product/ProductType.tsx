export default function ProductType(props: { title: string }) {
    return (
        <p className={`py-1 px-2 border rounded-full text-product-color-${props.title.toLowerCase()}`}>{props.title}</p>
    )
}