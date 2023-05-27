import { useEffect, useReducer, useState } from "react";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import { CreateOrderPageChooseProductStep } from "./Steps/CreateOrderPageChooseProductStep";
import { CreateOrderPageChooseRouteStep } from "./Steps/CreateOrderPageChooseRouteStep";
import { CreateOrderPageDetail } from "./Steps/CreateOrderPageDetail";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { createOrderSlice } from "../../stores/create-order-state";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChosenProductsInput, CreateOrderInputs, CreateOrderPageDetailInput } from "./Steps/CreateOrderPageTypes";
import { useDialog } from "../../hooks/use-dialog";
import { Route } from "../../entities/route";
import { ROUTES } from "../../utils/routes";

const enum CreateOrderDataActions {
    CHOOSE_PRODUCTS = "CHOOSE_PRODUCT",
    CHOOSE_ROUTE = "CHOOSE_ROUTE",
    SUBMIT_DETAIL = "SUBMIT_DETAIL"
}


type CreateOrderPageProps = {};

const CreateOrderPage = (props: CreateOrderPageProps) => {
    const navigate = useNavigate();

    const [createOrderData, setCreateOrderData] = useState<CreateOrderInputs>();

    // const [createOrderData, dispatch] = useReducer<typeof createOrderDataReducer>(createOrderDataReducer);
    const { showDialog, hideDialog, showInfoDialog } = useDialog();

    const choseProductsForm = useForm<ChosenProductsInput>();
    const onChoseProductSubmit: SubmitHandler<ChosenProductsInput> = (data) => {
        if (data.products.length === 0) {
            showInfoDialog({
                success: false,
                message: "Must choose at least 1 product!"
            })
        } else {
            setCreateOrderData({
                ...createOrderData,
                products: data.products,
            })
            choseProductsForm.reset()

            setCurrentStep(currentStep + 1);
        }
    }

    const onChooseRoute = (route?: Route) => {
        setCreateOrderData({
            ...createOrderData,
            route: route,
        });
    }

    const createOrderDetailForm = useForm<CreateOrderPageDetailInput>();

    const onCreateOrderDetaiSubmit: SubmitHandler<CreateOrderPageDetailInput> = (data) => {
        setCreateOrderData({
            ...data
        })
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
            element: <CreateOrderPageChooseRouteStep
                onChooseRoute={onChooseRoute}
            />
        },
        {
            label: 'Complete an order',
            completed: undefined,
            element: <CreateOrderPageDetail
                formHook={createOrderDetailForm}
                onSubmit={onCreateOrderDetaiSubmit}
            />
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
                    if (currentStep !== 0) {
                        setCurrentStep(currentStep - 1)
                    }
                }}
                onPrimaryButtonClicked={() => {
                    // if (currentStep !== steps.length - 1) {
                    //     setCurrentStep(currentStep + 1)
                    // }

                    switch (currentStep) {
                        case 0: {
                            choseProductsForm.handleSubmit(onChoseProductSubmit)()
                            break;
                        }
                        case 1: {
                            if (createOrderData?.route) {
                                setCurrentStep(currentStep + 1);
                            } else {
                                showInfoDialog({
                                    success: false,
                                    message: "Must choose a route!"
                                })
                            }
                            break;
                        }
                        case 2: {
                            createOrderDetailForm.handleSubmit(onCreateOrderDetaiSubmit)()
                            // setCurrentStep(currentStep + 1);
                            return;
                        }
                        default: {
                            return;
                        }
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