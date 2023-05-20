import { useEffect, useState } from "react";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import { Typography } from "../../components/Typography/Typography";
import { CreateOrderPageChooseProductStep } from "./Steps/CreateOrderPageChooseProductStep";

type CreateOrderPageProps = {};

const CreateOrderPage = (props: CreateOrderPageProps) => {
    const [steps, setSteps] = useState<(StepProps & { element: JSX.Element })[]>([
        {
            label: 'Chose a product',
            completed: undefined,
            element: <CreateOrderPageChooseProductStep />
        },
        {
            label: 'Chose a route',
            completed: undefined,
            element: <CreateOrderPageChooseProductStep />
        },
        {
            label: 'Complete an order',
            completed: undefined,
            element: <CreateOrderPageChooseProductStep />
        },
    ]);

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const newSteps = steps.map((step, index) => ({
            ...step,
            completed:
                currentStep === index
                    ? false : currentStep >
                        index ? true : undefined
        }))

        setSteps(newSteps);

    }, [currentStep])
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

                {
                    // Need to find alternative way to get last element with completed is true
                    steps
                        .filter(value => value.completed)
                        .slice(-1)
                        .find(() => true)?.element
                    ?? steps[0].element
                }

            </CreatePage>
        </>
    )
}

export { CreateOrderPage }