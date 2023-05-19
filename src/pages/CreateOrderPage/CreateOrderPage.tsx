import { useState } from "react";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import { Typography } from "../../components/Typography/Typography";

type CreateOrderPageProps = {};

const CreateOrderPage = (props: CreateOrderPageProps) => {
    const [steps, setSteps] = useState([
        {
            label: 'Chose a product',
            completed: false
        },
        {
            label: 'Chose a route',
            completed: false
        },
        {
            label: 'Complete an order',
            completed: false
        },
    ]);
    return (
        <>
            <CreatePage
                header="Create new order"
                divider={false}
                headerChildren={
                    <div className="flex flex-row justify-center mt-4">
                        <div className="w-[80%]">
                            <ProgressStep steps={steps} />
                        </div>
                    </div>
                }>

                <div className="flex flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex">
                            <Search placeholder="Search by product name, product type" />
                            <Filter />
                        </div>
                    </div>

                    <div className="flex-1">
                        <p>Product list</p>
                    </div>
                </div>

            </CreatePage>
        </>
    )
}

export { CreateOrderPage }