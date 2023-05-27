export enum OrderStatus {
    OPEN = 1,
    ASSIGNED = 2,
    JOB_STARTED = 3,
    PICK_UP_ARRIVED = 4,
    PICK_UP_DONE = 5,
    DELIVERY_ARRIVED = 6,
    DISCHARGED = 7,
    COMPLETED = 8
}

export const mapNumberToOrderStatus = (value: number): OrderStatus => {
    const match = Object.entries(OrderStatus).find(([key, enumValue]) => enumValue === value);

    if (match) {
        return OrderStatus[match[0] as keyof typeof OrderStatus]
    } else {
        return OrderStatus.ASSIGNED;
    }
}

export interface Order {
    id: string;
    licensePlate: string;
    driverInCharge: string;
    products: string[];
    createdAt: string;
    pickUpAt: string;
    unloadAt: string;
    orderFee: string;
    status: number;
}