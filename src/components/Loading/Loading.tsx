import * as RadixDialog from "@radix-ui/react-dialog";
import LoadingLottieAsset from '../../assets/lottie_loading.json';
import Lottie from "lottie-react";
type LoadingProps = RadixDialog.DialogProps;
const Loading = (props: LoadingProps) => {
    return (
        <RadixDialog.Root {...props}>
            <RadixDialog.Portal>
                <RadixDialog.Overlay className="fixed inset-0 bg-black opacity-20 data-[state=open]:animate-overlayShow" />
                <RadixDialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center py-4 pb-8 items-center bg-white outline-none rounded-lg max-w-[70vw] md:max-w-[50vw] lg:max-w-[30vw] w-full">
                    <LoadingLottie />
                    <p className="text-center break-all">Please wait a few seconds...</p>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    )
}

const LoadingLottie = () => {
    return (
        <Lottie animationData={LoadingLottieAsset} loop className="w-40" />
    )
}

export default Loading;