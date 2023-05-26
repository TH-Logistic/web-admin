import Product from "../../../entities/product"
import { Route } from "../../../entities/route"

export type ChosenProduct = Product & { weight: number }

export type ChosenProductsInput = {
    products: ChosenProduct[]
}

export type CreateOrderPageDetailInput = {
    deliverTime: number;
    pickUpContactName: string;
    pickUpContactNumber: string;
    unloadContactName: string;
    unloadContactNumber: string;
    note: string;
}

export type CreateOrderInputs = Partial<ChosenProductsInput & { route: Route } & CreateOrderPageDetailInput>