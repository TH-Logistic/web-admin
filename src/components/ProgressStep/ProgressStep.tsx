import CheckIcon from '../../assets/check.svg'
export type StepProps = {
    label: string;

    /**
     * Undefined: Not yet working on
     * False: Working on but not yet completed
     * True: Completed
     */
    completed?: boolean;
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
                                <div key={index}>
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step.completed === undefined ? "bg-border-color" : "bg-button-color"}`} >
                                        {step.completed === true && <img src={CheckIcon} alt='Check' className='w-4 h-4' />}
                                    </div>
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