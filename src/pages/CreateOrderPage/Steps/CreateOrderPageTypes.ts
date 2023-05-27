import Product from "../../../entities/product"
import { Route } from "../../../entities/route"

export type CreateOrderChosenProduct = Product & { weight: number }

export type CreateOrderChosenProductsInput = {
    products: CreateOrderChosenProduct[]
}

export type CreateOrderDetailInput = {
    deliverTime: number;
    pickUpContactName: string;
    pickUpContactNumber: string;
    unloadContactName: string;
    unloadContactNumber: string;
    note: string;
}

export type CreateOrderInputs = Partial<CreateOrderChosenProductsInput & { route: Route } & CreateOrderDetailInput>