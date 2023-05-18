import { Driver } from "../../../entities/driver"

export type CreateDriverRequest = Omit<Driver, 'id'> & {
    password: string
}