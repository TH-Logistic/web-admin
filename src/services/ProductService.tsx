import axios from "axios"
import { productClient } from "./clients"

const getProducts = (page: number = 0,
    size: number = 5,
    minPrice: number = 0,
    maxPrice: number = 0,
    types: number[] = []
) => {
    return productClient.get('/product/list', {
        params: {
            page,
            size,
            minPrice,
            maxPrice,
            types
        }
    }).then((response) => response.data)
}

export { getProducts }