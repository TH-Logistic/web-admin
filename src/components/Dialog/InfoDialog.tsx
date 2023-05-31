import * as RadixDialog from "@radix-ui/react-dialog";
import SuccessIcon from '../../assets/lottie_success.json';
import ErrorIcon from '../../assets/lottie_error.json';
import ActionButton from "../ActionButton/ActionButton";
import { useDialog } from "../../hooks/use-dialog";
import Lottie from "lottie-react";
import AppDialog from "./AppDialog";

const LottieInfoIcon = ({ success }: { success: boolean }) => {
    return <Lottie animationData={success ? SuccessIcon : ErrorIcon} loop={false} className="w-20" />
}

type InfoDialogProps = RadixDialog.DialogProps & {
    success?: boolean;
    message?: string;
    title?: string;
    onProceedClicked?: () => void;
};
const InfoDialog = ({ success = true, message = 'Message', title, onProceedClicked, ...props }: InfoDialogProps) => {
    const { hideDialog } = useDialog();
    return (
        <AppDialog {...props}>
            <div className="flex flex-col items-center gap-8 justify-evenly w-[70vw] md:w-[50vw] lg:w-[30vw] h-[30vh]">
                <LottieInfoIcon success={success} />

                <div className="flex flex-col items-center gap-4">
                    <p className="mx-4 font-semibold text-center">{message}</p>
                    <RadixDialog.Close asChild>
                        <ActionButton
                            className="bg-primary-color"
                            title={title ? title : success ? 'Proceed' : 'Go Back'}
                            onClick={() => {
                                hideDialog()
                                onProceedClicked?.();
                            }} />
                    </RadixDialog.Close>
                </div>
            </div>
        </AppDialog>
    )
}

export default InfoDialog;