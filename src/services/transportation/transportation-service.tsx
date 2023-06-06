import { transportationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { Transportation, TransportationDetail } from "../../entities/transportation"
import { QueryParams } from "../common/query-params"
import { Statistic } from "../common/dto/statistic"
import { Order } from "../../entities/order"
import { CreateTransportationRequest } from "./dto/create-transportation-request"

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

const createTransportation = async (request: CreateTransportationRequest): Promise<string> => {
    const response = await transportationClient.post<{ id: string }>("", request)

    return response.data.id;
}

type GetTransportationDetailResponse = {
    transportation: TransportationDetail,
    statistic: Statistic,
    jobs: Order[]
}
const getTransportationDetail = async (transportationId: string): Promise<GetTransportationDetailResponse> => {
    const response = await transportationClient.get<GetTransportationDetailResponse>(`/detail/${transportationId}`);

    return response.data;
}

export {
    getTransportations,
    getTransportationDetail,
    createTransportation
}