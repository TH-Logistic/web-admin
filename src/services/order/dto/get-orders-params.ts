export type GetOrdersParams = {
    minOrderFee?: number;
    maxOrderFee?: number;
    statusList?: number[];
    keyword?: string;
}