import { productClient } from "../../ports/clients"
import Product from "../../entities/product"
import { Pagination } from "../../entities/pagination"
import { QueryParams } from "../common/query-params"

const getProducts = async ({ page = 0,
    size = 5,
    minPrice = 0,
    maxPrice = 100000,
    types = []
}: QueryParams<{
    types: number[],
    minPrice?: number,
    maxPrice?: number,
}>): Promise<Pagination<Product>> => {
    const response = await productClient.get<Pagination<Product>>('/product/list', {
        params: {
            page,
            size,
            minPrice,
            maxPrice,
            types: types.join(',')
        }
    })

    return response.data
}

export { getProducts }