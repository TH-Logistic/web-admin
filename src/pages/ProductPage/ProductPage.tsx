import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import ProductItem from "./Product/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductService";

export default function ProductPage() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useQuery({
        queryKey: ['getProducts'],
        queryFn: async () => await getProducts(),
        // select: (response) => response.data,
    });

    return (
        <div className="flex flex-col m-8">
            <p>{data}</p>
            <div className="flex flex-row items-center">
                <Search />
                <Filter />
                <div className="flex-auto" />
                <ActionButton title="+ Create" onClick={() => navigate('/products/create')} />
            </div>
            <h1 className="my-8 text-xl font-medium">Products</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                {Array(10).fill(<ProductItem />)}
            </div>
        </div>
    )
}