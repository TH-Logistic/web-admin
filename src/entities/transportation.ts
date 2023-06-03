import { Driver } from "./driver"
import { Garage } from "./garage"

export interface Transportation {
    id: string
    licensePlate: string
    load: number
    garage: Garage
    mainDriverName: string
    deliveryStatus: number
    isInGarage: boolean
    coDriverName: string
}

export interface TransportationDetail {
    id: string
    licensePlate: string
    load: number
    garage: Garage
    deliveryStatus: number
    isInGarage: boolean
    mainDriver: Driver & {
        dateOfBirth: number,
        numberOfTrips: number
    }

    coDriver: Driver & {
        dateOfBirth: number,
        numberOfTrips: number
    } | undefined

}