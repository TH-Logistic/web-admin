import { useEffect, useState } from "react";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import { CreateOrderPageChooseProductStep } from "./Steps/CreateOrderPageChooseProductStep";
import { CreateOrderPageChooseRouteStep } from "./Steps/CreateOrderPageChooseRouteStep";
import { CreateOrderPageDetail } from "./Steps/CreateOrderPageDetail";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { createOrderSlice } from "../../stores/create-order-state";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChosenProductsInput, CreateOrderInputs } from "./Steps/CreateOrderPageTypes";

type CreateOrderPageProps = {};

const CreateOrderPage = (props: CreateOrderPageProps) => {
    const navigate = useNavigate();

    const [createOrderData, setCreateOrderData] = useState<CreateOrderInputs>();

    const choseProductsForm = useForm<ChosenProductsInput>();
    const onChoseProductSubmit: SubmitHandler<ChosenProductsInput> = (data) => {
        setCreateOrderData({
            ...createOrderData,
            products: data.products,
        })
        choseProductsForm.reset()
    }

    const [steps, setSteps] = useState<(StepProps & { element: JSX.Element })[]>([
        {
            label: 'Chose a product',
            completed: undefined,
            element: <CreateOrderPageChooseProductStep
                formHook={choseProductsForm}
                onSubmit={onChoseProductSubmit}
            />
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
                    if (currentStep === 0) {
                        navigate(-1);
                    } else {
                        setCurrentStep(currentStep - 1)
                    }
                }}
                onPrimaryButtonClicked={() => {
                    switch (currentStep) {
                        case 0: {
                            choseProductsForm.handleSubmit(onChoseProductSubmit)()
                            setCurrentStep(currentStep + 1);
                            break;
                        }
                        case 1: {
                            setCurrentStep(currentStep + 1);
                            break;
                        }
                        case 2: {
                            setCurrentStep(currentStep + 1);
                            return;
                        }
                        default: {
                            return;
                        }
                    }

                    setCurrentStep(currentStep + 1);
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