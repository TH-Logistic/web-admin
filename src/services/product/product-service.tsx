import axios from "axios"
import { productClient } from "../../ports/clients"
import Product from "../../entities/product"
import { BaseResponse } from "../../entities/base-response"
import { Pagination } from "../../entities/pagination"

const getProducts = async (
    types: number[],
    page: number = 0,
    size: number = 5,
    minPrice: number = 0,
    maxPrice: number = 100000,
): Promise<Pagination<Product>> => {
    const response = await productClient.get<BaseResponse<Pagination<Product>>>('/product/list', {
        params: {
            page,
            size,
            minPrice,
            maxPrice,
            types: types.join(',')
        }
    })

    return response.data.data!
}

export { getProducts }