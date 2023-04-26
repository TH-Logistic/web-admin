import { transportationClient } from "../../ports/clients"
import { BaseResponse } from "../../entities/base-response"
import { Pagination } from "../../entities/pagination"
import { Garage } from "../../entities/garage"
import { QueryParams } from "../common/query-params"

const getGarages = async ({
    page = 0,
    size = 5,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Garage>> => {
    const response = await transportationClient.get<Pagination<Garage>>('/garage/list', {
        params: {
            size,
            page,
            keyword,
        }
    })

    return response.data
}

export { getGarages }