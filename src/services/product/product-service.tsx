import { productClient } from "../../ports/clients"
import Product from "../../entities/product"
import { Pagination } from "../../entities/pagination"
import { QueryParams } from "../common/query-params"
import { camelizeKeys } from 'humps';

const getProducts = async ({
    page = 0,
    size = 50,
    minPrice = 0,
    maxPrice = undefined,
    types = []
}: QueryParams<{
    types?: number[],
    minPrice?: number,
    maxPrice?: number,
}>): Promise<Pagination<Product>> => {
    const response = await productClient.get<Pagination<Product>>('/list', {
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

const getProductById = async (productId: string): Promise<Product | undefined> => {
    const response = await productClient.get<Product>(`/${productId}`);

    return response.data;

}


const createProduct = async (product: Omit<Product, 'id'>): Promise<{ id: string }> => {
    const response = await productClient.post<{ id: string }>('', camelizeKeys(product));

    return response.data;
}

export {
    getProducts,
    getProductById,
    createProduct
}