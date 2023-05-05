import ProductType from "../../ProductPage/Product/ProductType";
import ProductTypeItem from "../../ProductPage/Product/ProductTypeItem";

export default function Orders() {
    const headers: string[] = [
        'Order number',
        'Driver in charge',
        'Truck license plate',
        'Product type',
        'Date created',
        'Pickup at',
        'Unload at',
        'Order fee',
        'Status'
    ]
    return (
        <div className="h-full overflow-auto border rounded-md border-border-color">
            <table className="w-full m-4 table-auto">
                <thead>
                    <tr>
                        {
                            headers
                                .map(
                                    (header) =>
                                        <th key={header} className="pr-16 font-semibold text-start whitespace-nowrap text-primary-table-color">
                                            {header}
                                        </th>
                                )
                        }
                    </tr>
                </thead>
                <tbody className="mt-4">
                    {
                        Array.from(
                            { length: 50 },
                            (_, index) =>
                                <tr key={index}>
                                    <td className="pt-2 underline text-primary-table-color">{'abc'}</td>
                                    < td className="pt-2" > 59A - 9999</td>
                                    <td className="pt-2">Hoang Thinh</td>
                                    <td className="flex justify-start pt-2">
                                        <ProductTypeItem type={ProductType.Dangerous} />
                                    </td>
                                    <td className="pt-2">21/12/2021</td>
                                    <td className="pt-2">Tan Binh</td>
                                    <td className="pt-2">Linh Trung</td>
                                    <td className="pt-2">5,000,000</td>
                                    <td className="pt-2">Completed</td>
                                </tr>
                        )
                    }
                </tbody>
            </table >
        </div >
    )
}