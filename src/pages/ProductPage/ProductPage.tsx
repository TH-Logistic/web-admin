import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import ProductItem from "./Product/ProductItem";

export default function ProductPage() {
    return (
        <div className="flex flex-col m-8">
            <div className="flex flex-row items-center">
                <Search />
                <Filter />
                <div className="flex-auto" />
                <ActionButton />
            </div>
            <h1 className="my-8 text-xl font-medium">Products</h1>
            <div className="flex flex-wrap gap-4 lg:justify-between sm:justify-center">
                {Array(10).fill(<ProductItem />)}
            </div>
        </div>
    )
}