import axios from "axios"
import { productClient } from "../../ports/clients"
import Product from "../../entities/product"

const getProducts = async (page: number = 0,
    size: number = 5,
    minPrice: number = 0,
    maxPrice: number = 0,
    types: number[] = []
) => {
    const response = await productClient.get('/product/list', {
        params: {
            page,
            size,
            minPrice,
            maxPrice,
            types
        }
    })

    return response.data.data
}

export { getProducts }