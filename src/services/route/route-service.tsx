import { routeClient } from "../../ports/clients"
import { Route } from "../../routes/routes"
import { QueryParams } from "../common/query-params"

export const getRoutes = async ({
    size = 5,
    page = 0,
    keyword = 'Th'
}: QueryParams<{ keyword?: string }>): Promise<Route[]> => {
    const response = await routeClient.get<Route[]>('/route/list', {
        params: {
            size,
            page,
            keyword
        }
    })

    console.log(response)

    return response.data
}