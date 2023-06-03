import { transportationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Transportation, TransportationDetail } from "../../entities/transportation"
import { QueryParams } from "../common/query-params"
import { Statistic } from "../common/dto/statistic"
import { Order } from "../../entities/order"

const getTransportations = async ({
    page = 0,
    size = 5,
    keyword = undefined
}: QueryParams<{ keyword?: string }>,
): Promise<Pagination<Transportation>> => {
    const response = await transportationClient.get<Pagination<Transportation>>('/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data
}

type GetTransportationDetailResponse = {
    product: TransportationDetail,
    statistic: Statistic,
    jobs: Order[]
}
const getTransportationDetail = async (transportationId: string): Promise<GetTransportationDetailResponse> => {
    const response = await transportationClient.get<GetTransportationDetailResponse>(`/detail/${transportationId}`);

    return response.data;
}

export { getTransportations, getTransportationDetail }