import { Staff } from "../../entities/staff"
import { staffClient } from "../../ports/clients"

export const getStaffs = async (): Promise<Staff[]> => {
    const response = await staffClient.get<Staff[]>('/users')

    return response.data
}