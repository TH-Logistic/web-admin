type ProductList = {
    productId: string;
    weight: number;
}
export interface CreateOrderRequest {
    productList: ProductList[];
    routeId: string;
    deliveryTime: number;
    pickUpContactName: string,
    pickUpContactNo: string;
    unloadContactName: string;
    unloadContactNo: string;
}