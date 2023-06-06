import { Order } from "./order"

export interface Report {
    totalOrders: number,
    totalTrucks: number,
    totalProducts: number,
    totalRoutes: number,
    billing: {
        profit: {
            amount: number,
            totalOrders: number
        },
        debt: {
            amount: number,
            totalOrders: number
        }
    },
    orderPricePieChart: {
        tonBasedJobPrice: number,
        tripBasedJobPrice: number
    },
    productsPieChart: {
        type: number,
        total: number
    }[]
    ,
    lineChart: { month: string, totalPrice: number }[]
    recentJobs: Order[]
}