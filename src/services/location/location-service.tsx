import { routeClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Location } from "../../entities/location"

const getLocations = async (
    page: number = 0,
    size: number = 5,
    keyword: string | undefined = undefined,
): Promise<Pagination<Location>> => {
    const response = await routeClient.get<Pagination<Location>>('/location/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data
}

export { getLocations }