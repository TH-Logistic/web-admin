import * as RadixDialog from "@radix-ui/react-dialog";
type AppDialogProps = React.PropsWithChildren<RadixDialog.DialogProps>;

const AppDialog = ({ children, ...props }: AppDialogProps) => {
    return (
        <RadixDialog.Root {...props}>
            <RadixDialog.Portal>
                <RadixDialog.Overlay className="fixed inset-0 bg-black opacity-20 data-[state=open]:animate-overlayShow" />
                <RadixDialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center pt-4 pb-8 items-center bg-white outline-none rounded-lg">
                    {children}
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    )
}

export default AppDialog;