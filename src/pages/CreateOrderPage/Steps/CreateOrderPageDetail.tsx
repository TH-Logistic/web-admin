import { Controller, SubmitHandler, UseFormReturn, useForm, useFormContext } from "react-hook-form"
import { Input } from "../../../components/Input/Input"
import { MultilLineInput } from "../../../components/Input/MultilineInput"
import { CreateOrderDetailInput, CreateOrderInputs } from "./CreateOrderPageTypes"
import { LegacyRef } from "react"
import { DateTimePicker } from "../../../components/DateTimePicker/DateTimePicker"
import moment from "moment"

const FormTitle = (props: React.PropsWithChildren) => {
    return <p className="text-lg font-bold">{props.children}</p>
}

type CreateOrderPageDetailProps = {
    formRef: LegacyRef<HTMLFormElement>;
    onSubmit: SubmitHandler<CreateOrderDetailInput>;
}

const CreateOrderPageDetail = ({
    formRef,
    onSubmit
}: CreateOrderPageDetailProps) => {
    const { register, handleSubmit, control, getValues, setValue, formState: { errors } }: UseFormReturn<CreateOrderDetailInput> = useForm<CreateOrderDetailInput>();
    return (
        <form ref={formRef} className="flex flex-col h-full gap-8 overflow-auto" onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-col gap-4">
                <FormTitle>Need to deliver at</FormTitle>

                <Controller
                    control={control}
                    name='deliverTime'
                    rules={{
                        required: {
                            value: true,
                            message: "Delivery time can not be empty!"
                        }
                    }}
                    render={({ field }) => (
                        <div className={`flex flex-row w-full gap-4`}>
                            <label className='basis-1/5'>Delivery Time</label>
                            <div className="flex flex-col w-full gap-2">
                                <DateTimePicker
                                    {...field}
                                    views={["year", "month", "day", "hours", "minutes"]}
                                    formatDensity="spacious"
                                    format="HH:mm - DD/MM/YYYY"
                                    value={getValues('deliverTime') ? moment(getValues('deliverTime')) : undefined}
                                    minDateTime={moment().subtract({ year: 1 })}
                                    onChange={(value) => {
                                        if (value) {
                                            setValue('deliverTime', (value as moment.Moment).valueOf())
                                        }
                                    }}
                                />
                                {errors.deliverTime?.message && <p className='text-sm text-error-color'>{errors.deliverTime?.message}</p>}
                            </div>
                        </div>
                    )}
                />

                {/* <Input
                    centerLabel
                    register={
                        register('deliverTime', {
                            valueAsNumber: true,
                            required: {
                                value: true,
                                message: 'Deliver time can not be empty!'
                            }
                        })
                    }
                    error={errors.deliverTime}
                    label="Deliver time"
                    placeholder="Deliver time"
                /> */}
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