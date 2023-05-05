import { Pagination } from "../../entities/pagination"
import { Route } from "../../entities/route"
import { routeClient } from "../../ports/clients"
import { QueryParams } from "../common/query-params"

export const getRoutes = async ({
    size = 5,
    page = 0,
    keyword = 'Th'
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Route>> => {
    const response = await routeClient.get<Pagination<Route>>('/route/list', {
        params: {
            size,
            page,
            keyword
        }
    })

    return response.data
}