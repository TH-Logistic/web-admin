export type StepProps = {
    label: string;
    completed: boolean;
}
type ProgressStepProps = {
    steps: StepProps[]
}
const ProgressStep = ({ steps }: ProgressStepProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
                {
                    steps.map(
                        (step, index) =>
                            <>
                                <div className="flex flex-col" >
                                    <div className={`w-8 h-8 rounded-full ${step.completed ? "bg-button-color" : "bg-border-color"}`} />
                                </div>

                                {index !== steps.length - 1 && <div className="h-0.5  bg-border-color grow" />}
                            </>
                    )
                }
            </div >

            <div className="flex flex-row justify-between">
                {
                    steps.map(
                        (step, index) =>
                            <p
                                className={`font-semibold
                                
                                ${index === 0 ? "-translate-x-[40%]" : index === steps.length - 1 ? "translate-x-[40%]" : ""}
                                `}>
                                {step.label}
                            </p>
                    )
                }
            </div>
        </div>

    )
}

export { ProgressStep }