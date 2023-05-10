import { UseMutationResult, UseQueryResult, useMutation } from "@tanstack/react-query";
import { useDialog } from "./use-dialog"
import { success } from "../stores/api-state";
import { resourceLimits } from "worker_threads";

type UseApiProps = {
    showLoading: boolean;
    showErrorDialog: boolean;
    showSuccessDialog: boolean;
    fn: UseQueryResult | UseMutationResult;
    data?: any
}

const useApi = async ({
    showLoading = true,
    showErrorDialog = true,
    showSuccessDialog = false,
    fn,
    data
}: UseApiProps) => {
    const { hideDialog, showLoadingDialog, showInfoDialog } = useDialog();

    if (showLoading) {
        showLoadingDialog();
    }

    if (fn instanceof useMutation) {
        const result = await (fn as UseMutationResult).mutateAsync(data, {
            onSuccess: (data) => {
                hideDialog()
                if (showSuccessDialog) {
                    showInfoDialog({ success: true, message: 'Success' })
                }
            },

            onError(error) {
                hideDialog()
                if (showErrorDialog) {
                    showInfoDialog({ success: false, message: error?.toString() })
                }
            },
        });

        hideDialog();
    }

    try {
        showLoadingDialog();
    } catch (e) {
        showInfoDialog({ success: false, message: (e as any).toString() })
    }


}