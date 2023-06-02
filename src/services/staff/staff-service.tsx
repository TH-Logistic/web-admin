import { Staff, StaffRole, mapStaffStatusStringToEnum } from "../../entities/staff"
import { staffClient } from "../../ports/clients"
import { CreateStaffRequest } from "./dto/create-staff-request"

const getStaffs = async (): Promise<Staff[]> => {
    const response = await staffClient.get<Staff[]>('/', {
        params: {
            role: StaffRole.ADMIN
        }
    })

    return response.data.map((staff) => {
        return {
            ...staff,
            status: mapStaffStatusStringToEnum(staff.status.toString())
        }
    })
}

const getStaffById = async (staffId: string): Promise<Staff> => {
    const response = await staffClient.get<Staff>(`/${staffId}`);

    return {
        ...response.data,
        status: mapStaffStatusStringToEnum(response.data.status.toString())
    }
}


const createStaff = async (data: CreateStaffRequest): Promise<Staff> => {
    const response = await staffClient.post<Staff>('/', { ...data });

    return response.data
}

export {
    getStaffs,
    createStaff,
    getStaffById
}