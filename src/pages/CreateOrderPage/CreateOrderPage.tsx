import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { ProgressStep, StepProps } from "../../components/ProgressStep/ProgressStep";
import CreatePage from "../common/CreatePage/CreatePage";
import { CreateOrderPageChooseProductStep } from "./Steps/CreateOrderPageChooseProductStep";
import { CreateOrderPageChooseRouteStep } from "./Steps/CreateOrderPageChooseRouteStep";
import { CreateOrderPageDetail } from "./Steps/CreateOrderPageDetail";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CreateOrderChosenProductsInput, CreateOrderInputs, CreateOrderDetailInput } from "./Steps/CreateOrderPageTypes";
import { useDialog } from "../../hooks/use-dialog";
import { Route } from "../../entities/route";
import { useMutation } from "@tanstack/react-query";
import * as OrderService from "../../services/order/order-service";
import { useNavigate } from "react-router-dom";

const enum CreateOrderDataActions {
    CHOOSE_PRODUCTS = "CHOOSE_PRODUCT",
    CHOOSE_ROUTE = "CHOOSE_ROUTE",
    SUBMIT_DETAIL = "SUBMIT_DETAIL"
}

type CreateOrderDataActionType = {
    type: CreateOrderDataActions.CHOOSE_PRODUCTS;
    payload: CreateOrderChosenProductsInput;
} | {
    type: CreateOrderDataActions.CHOOSE_ROUTE;
    payload: Route | undefined;
} | {
    type: CreateOrderDataActions.SUBMIT_DETAIL;
    payload: CreateOrderDetailInput
}

const createOrderDataReducer = (state: CreateOrderInputs, action: CreateOrderDataActionType): CreateOrderInputs => {
    const { type, payload } = action;

    switch (type) {
        case CreateOrderDataActions.CHOOSE_PRODUCTS: {
            return {
                ...state,
                products: payload.products
            }
        }
        case CreateOrderDataActions.CHOOSE_ROUTE: {
            return {
                ...state,
                route: payload
            };
        }
        case CreateOrderDataActions.SUBMIT_DETAIL: {
            return {
                ...state,
                ...payload,
            };
        }
    }
}


const CreateOrderPage = () => {
    const navigate = useNavigate();
    const { showInfoDialog, showLoadingDialog, hideDialog } = useDialog();
    const createOrderMutation = useMutation({
        mutationFn: OrderService.createOrder
    })
    const [createOrderData, dispatch] = useReducer(createOrderDataReducer, {});

    // Use this ref for get access to create order data value inside submit callback
    const createOrderDataRef = useRef<CreateOrderInputs>();
    createOrderDataRef.current = createOrderData;

    // Chose Product Form
    const choseProductsForm = useForm<CreateOrderChosenProductsInput>();
    const onChoseProductSubmit: SubmitHandler<CreateOrderChosenProductsInput> = (data) => {
        if (data.products.length === 0) {
            showInfoDialog({
                success: false,
                message: "Must choose at least 1 product!"
            })
        } else {
            dispatch({
                type: CreateOrderDataActions.CHOOSE_PRODUCTS,
                payload: data
            })

            choseProductsForm.reset()

            setCurrentStep(currentStep + 1);
        }
    }

    // Choose Route
    const onChooseRoute = (route?: Route) => dispatch({
        type: CreateOrderDataActions.CHOOSE_ROUTE,
        payload: route
    })

    // Submit Detail
    const createOrderDetailFormRef = useRef<HTMLFormElement>(null);

    const onCreateOrderDetaiSubmit: SubmitHandler<CreateOrderDetailInput> = async (data) => {
        dispatch({ type: CreateOrderDataActions.SUBMIT_DETAIL, payload: data });

        showLoadingDialog();
        createOrderMutation.mutate({
            productList: createOrderDataRef.current?.products?.map(value => ({ productId: value.id, weight: value.weight })) ?? [],
            routeId: createOrderDataRef.current?.route?.id!,
            deliveryTime: data.deliverTime,
            pickUpContactName: data.pickUpContactName,
            pickUpContactNo: data.pickUpContactNumber,
            unloadContactName: data.unloadContactName,
            unloadContactNo: data.unloadContactNumber,
            notesToDriver: data.note,
        }, {
            onSuccess: (data) => {
                hideDialog();
                navigate(-1)
            },
            onError: (err) => {
                showInfoDialog({
                    success: false,
                    message: err?.toString(),
                })
            }
        });
    }

    const [steps, setSteps] = useState<(StepProps & { element: JSX.Element })[]>([
        {
            label: 'Chose a product',
            completed: undefined,
            element:
                <CreateOrderPageChooseProductStep
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
            element:
                <CreateOrderPageDetail
                    formRef={createOrderDetailFormRef}
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
                centerHeaderItems={false}
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
                            createOrderDetailFormRef.current?.requestSubmit();
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