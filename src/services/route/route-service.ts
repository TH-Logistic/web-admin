import { Pagination } from "../../entities/pagination"
import { Route } from "../../entities/route"
import { routeClient } from "../../ports/clients"
import { QueryParams } from "../common/query-params"
import { CreateRouteRequest } from "./dto/create-route-request"

const getRoutes = async ({
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

const createRoute = async (request: CreateRouteRequest): Promise<{ id: string }> => {
    const response = await routeClient.post<{ id: string }>("", request);

    return response.data;
}

export {
    getRoutes,
    createRoute
}