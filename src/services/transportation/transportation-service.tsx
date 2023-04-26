import { transportationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Transportation } from "../../entities/transportation"
import { QueryParams } from "../common/query-params"

const getTransportations = async ({
    page = 0,
    size = 5,
    keyword = undefined
}: QueryParams<{ keyword?: string }>,
): Promise<Pagination<Transportation>> => {
    const response = await transportationClient.get<Pagination<Transportation>>('/transportation/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data
}

export { getTransportations }