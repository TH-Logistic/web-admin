import { useEffect, useState } from "react";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import { Typography } from "../../components/Typography/Typography";
import { CreateOrderPageChooseProductStep } from "./Steps/CreateOrderPageChooseProductStep";
import { CreateOrderPageChooseRouteStep } from "./Steps/CreateOrderPageChooseRouteStep";
import { CreateOrderPageDetail } from "./Steps/CreateOrderPageDetail";

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
            element: <CreateOrderPageChooseRouteStep />
        },
        {
            label: 'Complete an order',
            completed: undefined,
            element: <CreateOrderPageDetail />
        },
    ]);

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        console.log(currentStep)
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
                primaryTitle={currentStep !== steps.length - 1 ? 'Next' : 'Save'}
                secondaryTitle={currentStep === 0 ? 'Cancel' : 'Previous'}
                headerChildren={
                    <div className="flex flex-row justify-center mt-4">
                        <div className="w-[80%]">
                            <ProgressStep steps={steps} />
                        </div>
                    </div>
                }
                shouldNavigateBackWhenSecondaryClicked={currentStep === 0}
                onSecondaryButtonClicked={() => {
                    if (currentStep === 0) return;
                    setCurrentStep(currentStep - 1)
                }}
                onPrimaryButtonClicked={() => {
                    if (currentStep !== steps.length - 1) {
                        setCurrentStep(currentStep + 1);
                    }
                }}
            >
                <div className="max-h-[60vh] h-[60vh]">
                    {
                        steps[currentStep].element
                    }
                </div>

            </CreatePage>
        </>
    )
}

export { CreateOrderPage }