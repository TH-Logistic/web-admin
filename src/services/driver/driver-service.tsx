import { Driver } from "../../entities/driver"
import { StaffRole, mapStaffStatusStringToEnum } from "../../entities/staff";
import { driverClient, orderClient } from "../../ports/clients"
import { CreateDriverRequest } from "./dto/create-driver-request";

const getDrivers = async (): Promise<Driver[]> => {
    const response = await driverClient.get<Driver[]>('/', {
        params: {
            role: StaffRole.DRIVER
        }
    })

    return response.data.map((driver) => {
        return {
            ...driver,
            status: mapStaffStatusStringToEnum(driver.status.toString())
        }
    })
}

const getDriverNumberOfTrip = async (driverId: string): Promise<number> => {
    const response = await orderClient.get<number>(`/number-of-trips/${driverId}`)
    return response.data;
}


const createDriver = async (data: CreateDriverRequest): Promise<Driver> => {
    const response = await driverClient.post<Driver>('/', { ...data });

    return response.data
}

export { getDrivers, createDriver, getDriverNumberOfTrip }