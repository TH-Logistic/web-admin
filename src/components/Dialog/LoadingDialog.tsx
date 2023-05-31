import * as RadixDialog from "@radix-ui/react-dialog";
import LoadingLottieAsset from '../../assets/lottie_loading.json';
import Lottie from "lottie-react";
import AppDialog from "./AppDialog";

type LoadingProps = RadixDialog.DialogProps;
const LoadingDialog = (props: LoadingProps) => {
    return (
        <AppDialog {...props}>
            <div className="w-[70vw] md:w-[50vw] lg:w-[30vw] h-[30vh] flex flex-col items-center justify-evenly">
                <LoadingLottie />
                <p className="font-semibold text-center break-all">Please wait a few seconds...</p>
            </div>
        </AppDialog>
    )
}

const LoadingLottie = () => {
    return (
        <Lottie animationData={LoadingLottieAsset} loop className="w-40" />
    )
}

export default LoadingDialog;