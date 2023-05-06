import React from "react";
import Loading from "../components/Loading/Loading";
import AppDialog from "../components/Dialog/AppDialog";


// 3 cases
// Dialog not show
// Dialog showing loading
// Dialog showing information

type DialogNotShow = { show: false };
type DialogShowLoading = { show: true, loading: true };
type DialogShowInfo = { show: true, success: boolean, message?: string, loading?: undefined, onProceedClicked?: () => void };
type DialogShowInfoWithoutShow = Omit<DialogShowInfo, 'show'>;
type ShowDialogProps = DialogNotShow | DialogShowLoading | DialogShowInfo;

const DialogContext = React.createContext({
    showDialog: (props: ShowDialogProps) => { },
    showLoadingDialog: () => { },
    showInfoDialog: (props: DialogShowInfoWithoutShow) => { },
    hideDialog: () => { }
});

type DialogProviderProps = React.PropsWithChildren;

const DialogProvider = ({ children }: DialogProviderProps) => {
    const [dialogProps, setDialogProps] = React.useState<ShowDialogProps>({ show: false });

    const showDialog = (props: ShowDialogProps) => {
        setDialogProps(props)
    }

    const showLoadingDialog = () => {
        setDialogProps({ show: true, loading: true })
    }

    const showInfoDialog = (value: DialogShowInfoWithoutShow) => {
        setDialogProps({ show: true, ...value });
    }

    const hideDialog = () => {
        setDialogProps({ show: false })
    }

    let dialog: React.ReactNode;

    if (dialogProps.show) {
        if (dialogProps.loading) {
            dialog = <Loading open={dialogProps.show} />
        } else {
            dialog = <AppDialog open={dialogProps.show} success={dialogProps.success} message={dialogProps.message} />
        }
    } else {
        dialog = undefined;
    }

    return (
        <DialogContext.Provider value={{ showDialog, showLoadingDialog, showInfoDialog, hideDialog }}>
            {dialog}
            {children}
        </DialogContext.Provider>
    )
}

const useDialog = () => {
    const { showDialog, showLoadingDialog, showInfoDialog, hideDialog } = React.useContext(DialogContext);

    return { showDialog, showLoadingDialog, showInfoDialog, hideDialog }
}

export { DialogProvider, useDialog }