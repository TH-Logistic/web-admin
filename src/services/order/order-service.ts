import { orderClient } from "../../ports/clients"
import { CreateOrderRequest } from "./dto/create-order-request"

const createOrder = async (createOrderRequest: CreateOrderRequest) => {
    const response = await orderClient.post<{ id: string }>("", createOrderRequest)

    return response.data
}

export { createOrder }