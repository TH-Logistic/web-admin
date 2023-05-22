import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../../components/Input/Input"
import { MultilLineInput } from "../../../components/Input/MultilineInput"

const FormTitle = (props: React.PropsWithChildren) => {
    return <p className="text-lg font-bold">{props.children}</p>
}

type CreateOrderPageDetailInput = {
    deliverTime: number;
    pickUpContactName: string;
    pickUpContactNumber: string;
    unloadContactName: string;
    unloadContactNumber: string;
    note: string;
}

type CreateOrderPageDetailProps = {}

const CreateOrderPageDetail = (props: CreateOrderPageDetailProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateOrderPageDetailInput>()

    const onSubmit: SubmitHandler<CreateOrderPageDetailInput> = (data) => { }

    return (
        <form className="flex flex-col h-full gap-8 overflow-auto" onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-col gap-4">
                <FormTitle>Need to deliver at</FormTitle>
                <Input
                    centerLabel
                    register={
                        register('deliverTime', {
                            valueAsNumber: true, required: {
                                value: true,
                                message: 'Deliver time can not be null!'
                            }
                        })
                    }
                    error={errors.deliverTime}
                    label="Deliver time"
                    placeholder="Deliver time"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Pick up contact</FormTitle>
                <Input
                    centerLabel
                    register={
                        register('pickUpContactName', {
                            required: {
                                value: true,
                                message: 'Contact name can not be empty!'
                            }
                        })
                    }
                    error={errors.pickUpContactName}
                    label="Contact name"
                    placeholder="Contact name"
                />
                <Input
                    centerLabel
                    register={
                        register('pickUpContactNumber', {
                            required: {
                                value: true,
                                message: 'Contact number can not be empty!'
                            }
                        })
                    }
                    error={errors.pickUpContactNumber}
                    label="Contact number"
                    placeholder="Contact number"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Unload contact</FormTitle>
                <Input
                    centerLabel
                    register={
                        register('unloadContactName', {
                            required: {
                                value: true,
                                message: 'Contact name can not be empty!'
                            }
                        })
                    }
                    error={errors.unloadContactName}
                    label="Contact name"
                    placeholder="Contact name"
                />
                <Input
                    centerLabel
                    register={
                        register('unloadContactNumber', {
                            required: {
                                value: true,
                                message: 'Contact number can not be empty!'
                            }
                        })
                    }
                    error={errors.unloadContactNumber}
                    label="Contact number"
                    placeholder="Contact number"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Note to driver</FormTitle>
                <MultilLineInput
                    register={
                        register('note', {

                        })
                    }
                    error={errors.note}
                    placeholder="Note for driver..."
                />
            </div>
        </form>
    )
}

export { CreateOrderPageDetail }