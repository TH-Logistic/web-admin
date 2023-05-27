import { useQuery } from "@tanstack/react-query";
import ProductType from "../../ProductPage/Product/ProductType";
import ProductTypeItem from "../../ProductPage/Product/ProductTypeItem";
import * as OrderService from "../../../services/order/order-service";
import { OrderItem } from "./OrderItem";

export default function Orders() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['getOrders'],
        queryFn: () => OrderService.getOrders({}),
    });
    return (
        <div className="h-full overflow-auto border rounded-md border-border-color">
            <table className="w-full m-4 table-auto">
                <thead>
                    <tr>
                        <th className="pr-8 font-semibold text-start whitespace-nowrap text-primary-table-color">
                            Order number
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Truck license plate
                        </th>
                        <th className="px-8 font-semibold text-start whitespace-nowrap text-primary-table-color">
                            Driver in charge
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Product type
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Date created
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Pickup at
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Unload at
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Order fee
                        </th>
                        <th className="px-8 font-semibold text-center whitespace-nowrap text-primary-table-color">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="mt-4">
                    {
                        data?.content.map(value =>
                            <OrderItem {...value} />
                        )
                    }
                </tbody>
            </table >
        </div >
    )
}