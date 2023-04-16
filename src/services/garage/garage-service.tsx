import { transportationClient } from "../../ports/clients"
import { BaseResponse } from "../../entities/base-response"
import { Pagination } from "../../entities/pagination"
import { Garage } from "../../entities/garage"

const getGarages = async (
    page: number = 0,
    size: number = 5,
    keyword: string | undefined = undefined,
): Promise<Pagination<Garage>> => {
    const response = await transportationClient.get<BaseResponse<Pagination<Garage>>>('/garage/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data.data!
}

export { getGarages }