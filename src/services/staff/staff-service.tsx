import { Staff } from "../../entities/staff"
import { staffClient } from "../../ports/clients"
import { CreateStaffRequest } from "./create-staff-request"

const getStaffs = async (): Promise<Staff[]> => {
    const response = await staffClient.get<Staff[]>('/')

    return response.data
}


const createStaff = async (data: CreateStaffRequest): Promise<Staff> => {
    const response = await staffClient.post<Staff>('/', { ...data });

    return response.data
}

export { getStaffs, createStaff }