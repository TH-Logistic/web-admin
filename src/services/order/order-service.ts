import { Order, OrderDetail, mapNumberToOrderStatus } from "../../entities/order";
import { Pagination } from "../../entities/pagination";
import { Report } from "../../entities/report";
import { orderClient } from "../../ports/clients"
import { QueryParams } from "../common/query-params"
import { AddEndingGarageToOrderRequest } from "./dto/add-ending-garage-request";
import { AddTransportationToOrderRequest } from "./dto/add-transportation-request";
import { CreateOrderRequest } from "./dto/create-order-request"
import { GetOrdersParams } from "./dto/get-orders-params";

const getOrders = async ({
    page = 0,
    size = 50,
    minOrderFee = 0,
    maxOrderFee = 10e9,
    statusList,
    keyword,
}: QueryParams<GetOrdersParams>): Promise<Pagination<Order>> => {
    const response = await orderClient.get<Pagination<Order>>("/list", {
        params: {
            page,
            size,
            minOrderFee,
            maxOrderFee,
            statusList: statusList?.join(','),
            keyword
        }
    });

    return {
        ...response.data,
        content: response.data?.content.map(value => ({
            ...value,
            status: mapNumberToOrderStatus(value.status)
        }))
    };
}

const getOrderDetail = async (orderId: string): Promise<OrderDetail> => {
    const response = await orderClient.get<OrderDetail>(`/${orderId}`);

    return {
        ...response.data,
        status: mapNumberToOrderStatus(response.data.status)
    };
}

const createOrder = async (createOrderRequest: CreateOrderRequest) => {
    const response = await orderClient.post<{ id: string }>("", createOrderRequest);

    return response.data;
}

const addTransportationToOrder = async (addTransportationToOrderRequest: AddTransportationToOrderRequest): Promise<any> => {
    const response = await orderClient.post<{}>("/add-transportation", addTransportationToOrderRequest);

    return response.data;
}

const addEndingGarageToOrder = async (addEndingGarageToOrderRequest: AddEndingGarageToOrderRequest) => {
    const response = await orderClient.post<{}>("/add-ending-garage", addEndingGarageToOrderRequest);

    return response.data;
}

const getReportDashboard = async (year: number) => {
    const response = await orderClient.get<Report>("/dashboard", {
        params: {
            year
        }
    });

    return response.data;
}

export {
    getOrders,
    getOrderDetail,
    createOrder,
    addTransportationToOrder,
    getReportDashboard,
    addEndingGarageToOrder
}