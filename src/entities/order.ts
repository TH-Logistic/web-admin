import { Driver } from "./driver";
import { Garage } from "./garage";
import Product from "./product";
import { Route } from "./route";
import { Transportation } from "./transportation";

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

export const getOrderStatusString = (value: OrderStatus): string => {
    switch (value) {
        case OrderStatus.OPEN:
            return "Open";
        case OrderStatus.ASSIGNED:
            return "Assigned";
        case OrderStatus.JOB_STARTED:
            return "Job started";
        case OrderStatus.PICK_UP_ARRIVED:
            return "Pick up arrived";
        case OrderStatus.PICK_UP_DONE:
            return "Pick up done";
        case OrderStatus.DELIVERY_ARRIVED:
            return "Delivery arrived";
        case OrderStatus.DISCHARGED:
            return "Discharged";
        case OrderStatus.COMPLETED:
            return "Completed"
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

export interface OrderDetail {
    id: string;
    transportation?: {
        id: string;
        licensePlate: string;
        load: string;
        deliveryStatus: number;
        isInGarage: boolean;
        garage: Garage;
        mainDriver?: Driver & {
            dateOfBirth: number
        };
        coDriver?: Driver & {
            dateOfBirth: number
        };
    };
    startingGarage?: Garage,
    endingGarage?: Garage,
    products: Product[],
    route: Route
    healthcheck: null,
    status: OrderStatus,
    totalPrice: number,
    isTonBased: boolean,
    mustDeliverAt: number,
    createdAt: number,
    assignedAt?: number,
    acceptedAt?: null,
    pickUpArriveAt?: number,
    pickUpDoneAt?: number,
    unloadArriveAt?: number,
    unloadDoneAt?: number,
    completedAt?: number,
    pickUpContactName: string,
    pickUpContactNo: string,
    unloadContactName: string,
    unloadContactNo: string,
    notesToDriver?: string
}