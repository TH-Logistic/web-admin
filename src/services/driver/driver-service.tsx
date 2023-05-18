import { Driver } from "../../entities/driver"
import { driverClient } from "../../ports/clients"
import { CreateDriverRequest } from "./dto/create-driver-request";

const getDrivers = async (): Promise<Driver[]> => {
    const response = await driverClient.get<Driver[]>('/')

    return response.data
}


const createDriver = async (data: CreateDriverRequest): Promise<Driver> => {
    const response = await driverClient.post<Driver>('/', { ...data });

    return response.data
}

export { getDrivers, createDriver }