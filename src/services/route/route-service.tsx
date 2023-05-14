import { Pagination } from "../../entities/pagination"
import { Route } from "../../entities/route"
import { routeClient } from "../../ports/clients"
import { QueryParams } from "../common/query-params"

export const getRoutes = async ({
    size = 50,
    page = 0,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Route>> => {
    const response = await routeClient.get<Pagination<Route>>('/list', {
        params: {
            size,
            page,
            keyword
        }
    })

    return response.data
}