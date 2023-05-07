import { productClient } from "../../ports/clients"
import Product from "../../entities/product"
import { Pagination } from "../../entities/pagination"
import { QueryParams } from "../common/query-params"
import { camelizeKeys } from 'humps';

const getProducts = async ({
    page = 0,
    size = 50,
    minPrice = 0,
    maxPrice = 100000,
    types = []
}: QueryParams<{
    types?: number[],
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


const createProduct = async (product: Omit<Product, 'id'>): Promise<{ id: string }> => {
    const response = await productClient.post<{ id: string }>('/product', camelizeKeys(product));

    return response.data;
}

export { getProducts, createProduct }