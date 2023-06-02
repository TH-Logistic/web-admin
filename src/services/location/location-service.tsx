import { locationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { QueryParams } from "../common/query-params"
import { Location } from "../../entities/location"
import { Statistic } from "../common/dto/statistic"
import { Order } from "../../entities/order"

const getLocations = async ({
    page = 0,
    size = 50,
    keyword = undefined
}: QueryParams<{ keyword?: string }>): Promise<Pagination<Location>> => {
    const response = await locationClient.get<Pagination<Location>>('/list', {
        params: {
            page,
            size,
            keyword
        }
    })

    return response.data
}

type GetLocationDetailResponse = {
    location: Location,
    statistic: Statistic,
    jobs: Order[]
}
const getLocationDetail = async (locationId: string): Promise<GetLocationDetailResponse> => {
    const response = await locationClient.get<GetLocationDetailResponse>(`/detail/${locationId}`);

    return response.data;
}


const createLocation = async (location: Omit<Location, 'id'>): Promise<string> => {
    const response = await locationClient.post<string>('', {
        ...location,
    });

    return response.data
}


export {
    getLocations,
    createLocation,
    getLocationDetail
}