import { garageClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Garage } from "../../entities/garage"
import { QueryParams } from "../common/query-params"

const getGarages = async ({
    page = 0,
    size = 50,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Garage>> => {
    const response = await garageClient.get<Pagination<Garage>>('/list', {
        params: {
            size,
            page,
            keyword,
        }
    })

    return response.data
}

const createGarage = async (location: Omit<Garage, 'id'>): Promise<string> => {
    const response = await garageClient.post<string>('', {
        ...location,
    });

    return response.data
}

export { getGarages, createGarage }