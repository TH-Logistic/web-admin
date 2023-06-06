import { DateTimePicker } from "@mui/x-date-pickers"
import { ComponentProps } from "react"

type CustomDateTimePickerProps = ComponentProps<typeof DateTimePicker>
const CustomDateTimePicker = (props: CustomDateTimePickerProps) => {
    return (
        <DateTimePicker
            {...props}
            slotProps={{
                textField: {
                    variant: "outlined",
                    size: "small",
                },
                field: {
                }
            }}
        />
    )
}

export { CustomDateTimePicker as DateTimePicker }