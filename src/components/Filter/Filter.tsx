import FilterIcon from "../../assets/filter.svg";
import * as Popover from "@radix-ui/react-popover";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox"
import { useState } from "react";
import { ProductStatus } from "../../entities/product";
import CheckIcon from "../../assets/check.svg";

export default function Filter() {
    const [sliderValue, setSliderValue] = useState([15000000, 80000000])
    const [checkedStatus, setCheckedStatus] = useState(
        Object
            .values(ProductStatus).reduce<{ [key: string]: boolean }>((acc, curr) => (acc[curr] = false, acc), {})
    )
    return (
        <Popover.Root>
            <Popover.Anchor asChild>
                <div className="flex flex-col">
                    <Popover.Trigger asChild>
                        <div className="w-fit p-4 rounded-md border-border-color border-[1px]">
                            <img src={FilterIcon} alt="Filter icon" />
                        </div>
                    </Popover.Trigger>
                </div>
            </Popover.Anchor>
            <Popover.Portal >
                <Popover.Content align="start" className="flex flex-col max-w-md gap-4 p-8 my-4 bg-white border rounded-md shadow-lg border-border-color">
                    <p className="text-secondary-light">Filter by order fee</p>
                    <CustomSlider onValueChanged={(values) => setSliderValue(values)} />
                    <div className="flex flex-row justify-between">
                        <p>{Intl.NumberFormat('us').format(sliderValue[0])}</p>
                        <p>{Intl.NumberFormat('us').format(sliderValue[1])}</p>
                    </div>
                    <p className="text-secondary-light">Filter by order status</p>
                    <div className="grid grid-cols-2 gap-2">
                        {
                            Object.values(ProductStatus).map((status) =>
                                <CustomCheckBox
                                    label={status}
                                    key={status}
                                    onCheckedChange={(checked) => {
                                        const newStatus = { ...checkedStatus }
                                        newStatus[status] = checked
                                        setCheckedStatus(newStatus)
                                    }}
                                    checked={checkedStatus[status]} />
                            )
                        }
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root >

    )
}

type CustomSliderProps = {
    onValueChanged: (value: number[]) => void
}
const CustomSlider = (props: CustomSliderProps) => {
    return (
        <Slider.Root
            defaultValue={[15000000, 80000000]}
            min={0}
            minStepsBetweenThumbs={1}
            max={100000000}
            step={1000000}
            className="relative flex items-center w-80"
            onValueChange={props.onValueChanged}
        >
            <Slider.Track className="relative flex-grow h-1 rounded-full bg-border-color">
                <Slider.Range className="absolute h-full bg-button-color" />
            </Slider.Track>

            <Slider.Thumb className="block w-5 h-5 bg-white rounded-full outline outline-2 outline-button-color" />
            <Slider.Thumb className="block w-5 h-5 bg-white rounded-full outline outline-2 outline-button-color" />
        </Slider.Root>
    )
}
type CustomCheckBoxProps = {
    checked: boolean,
    onCheckedChange: (value: boolean) => void,
    label: string
}
const CustomCheckBox = (props: CustomCheckBoxProps) => {
    return (
        <div className="flex flex-row items-center flex-1 gap-2 ">
            <Checkbox.Root checked={props.checked} onCheckedChange={props.onCheckedChange} className={`w-4 h-4  ${props.checked ? 'bg-primary-color' : 'bg-white'}  ${props.checked ? 'border-none' : 'border'} rounded-[4px] flex items-center justify-center border-border-color`} name="product-status">
                <Checkbox.Indicator className="w-3 h-3" asChild>
                    <img src={CheckIcon} alt="Check Icon" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label htmlFor="product-status">{props.label}</label>
        </div>
    )
}