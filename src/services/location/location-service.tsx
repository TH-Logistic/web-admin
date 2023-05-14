import { locationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Location } from "../../entities/location"
import { QueryParams } from "../common/query-params"

const getLocations = async ({
    page = 0,
    size = 50,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Location>> => {
    const response = await locationClient.get<Pagination<Location>>('/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data
}


const createLocation = async (location: Omit<Location, 'id'>): Promise<string> => {
    const response = await locationClient.post<string>('', {
        ...location,
    });

    return response.data
}


export { getLocations, createLocation }