import ProductType, { getProductTypeFromNumber } from "../pages/ProductPage/Product/ProductType";

export enum ProductStatus {
    OPEN = 'Open',
    ASSIGNED = 'Assigned',
    JOB_STARTED = 'Job started',
    PICK_UP_ARRIVED = 'Pick up arrived',
    PICK_UP_DONE = 'Pick up done',
    DELIERY_ARRIVED = 'Delivery arrived',
    DISCHARGED = 'Discharged',
    COMPLETED = 'Completed'
}
export default class Product {
    name: string
    unit: string
    types: ProductType[]
    basePrice: number

    constructor(name: string, unit: string, types: number[], base_price: number) {
        this.name = name;
        this.unit = unit;
        this.types = types.map((type) => getProductTypeFromNumber(type));
        this.basePrice = base_price
    }
}