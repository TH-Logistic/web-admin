import { Staff } from "../../../entities/staff"

export type CreateStaffRequest = Omit<Staff, 'id'> & {
    password: string
}