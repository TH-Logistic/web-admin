import { transportationClient } from "../../ports/clients"
import { BaseResponse } from "../../entities/base-response"
import { Pagination } from "../../entities/pagination"
import { Transportation } from "../../entities/transportation"

const getTransportations = async (
    page: number = 0,
    size: number = 5,
    keyword: string | undefined = undefined,
): Promise<Pagination<Transportation>> => {
    const response = await transportationClient.get<BaseResponse<Pagination<Transportation>>>('/transportation/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data.data!
}

export { getTransportations }