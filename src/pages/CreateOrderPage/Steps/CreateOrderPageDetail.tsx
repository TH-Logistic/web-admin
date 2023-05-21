import { Input } from "../../../components/Input/Input"

type CreateOrderPageDetailProps = {}

const FormTitle = (props: React.PropsWithChildren) => {
    return <p className="text-lg font-bold">{props.children}</p>
}

const CreateOrderPageDetail = (props: CreateOrderPageDetailProps) => {
    return (
        <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <FormTitle>Need to deliver at</FormTitle>
                <Input
                    centerLabel
                    label="Deliver time"
                    placeholder="Deliver time"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Pick up contact</FormTitle>
                <Input
                    centerLabel
                    label="Contact name"
                    placeholder="Contact name"
                />
                <Input
                    centerLabel
                    label="Contact number"
                    placeholder="Contact number"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Unload contact</FormTitle>
                <Input
                    centerLabel
                    label="Contact name"
                    placeholder="Contact name"
                />
                <Input
                    centerLabel
                    label="Contact number"
                    placeholder="Contact number"
                />
            </div>

            <div className="flex flex-col gap-4">
                <FormTitle>Note to driver</FormTitle>
                <Input
                    centerLabel
                    placeholder="Note to driver"
                />
            </div>
        </form>
    )
}

export { CreateOrderPageDetail }