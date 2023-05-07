import * as RadixDialog from "@radix-ui/react-dialog";
import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import ActionButton from "../ActionButton/ActionButton";
import { useDialog } from "../../hooks/use-dialog";
type AppDialogProps = RadixDialog.DialogProps & {
    success?: boolean;
    message?: string;
    title?: string;
    onProceedClicked?: () => void;
};
const AppDialog = ({ success = true, message = 'Message', title, onProceedClicked, ...props }: AppDialogProps) => {
    const { hideDialog } = useDialog();
    return (
        <RadixDialog.Root {...props}>
            <RadixDialog.Portal>
                <RadixDialog.Overlay className="fixed inset-0 bg-black opacity-20 data-[state=open]:animate-overlayShow" />
                <RadixDialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-evenly gap-8 py-4 pb-8 items-center bg-white outline-none rounded-lg max-w-[70vw] md:max-w-[50vw] lg:max-w-[30vw] w-full h-full max-h-[40vh]">
                    <img src={success ? Success : Error} alt="dialog-icon" />

                    <div className="flex flex-col items-center gap-4">
                        <p className="font-semibold">{message}</p>
                        <RadixDialog.Close asChild>
                            <ActionButton
                                className="bg-primary-color"
                                title={title ? title : success ? 'Proceed' : 'Go Back'}
                                onClick={() => {
                                    onProceedClicked?.();
                                    hideDialog()
                                }} />
                        </RadixDialog.Close>
                    </div>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    )
}

export default AppDialog;