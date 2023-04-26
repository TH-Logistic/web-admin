import { routeClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Location } from "../../entities/location"
import { QueryParams } from "../common/query-params"

const getLocations = async ({
    page = 0,
    size = 5,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Location>> => {
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