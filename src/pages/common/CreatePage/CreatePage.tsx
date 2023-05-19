import { useNavigate } from "react-router-dom";
import ActionButton from "../../../components/ActionButton/ActionButton";
import Divider from "../../../components/Divider/Divider";
import CreateHeader from "../../../components/Headers/CreateHeader/CreateHeader";

export type CreatePageProps = React.PropsWithChildren<{
    header: string;
    title?: string;
    /**
     * Show divider between action buttons & children
     */
    divider?: boolean;
    headerChildren?: React.ReactNode,
    onPrimaryButtonClicked?: () => void;
    onSecondaryButtonClicked?: () => void;
}>;

const CreatePage = ({
    header,
    title,
    children,
    divider = true,
    headerChildren,
    onPrimaryButtonClicked,
    onSecondaryButtonClicked
}: CreatePageProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4">
            <CreateHeader header={header}>
                {headerChildren}
            </CreateHeader>

            <div className='flex flex-col gap-8 mx-16'>
                {title && <p className='font-semibold'>{title}</p>}
                {children}
                {divider && <Divider />}
                <div className='flex justify-end gap-4 mb-4'>
                    <ActionButton title='Cancel' primary={false} onClick={() => {
                        onSecondaryButtonClicked?.();
                        navigate(-1);
                    }} />
                    <ActionButton title='Save' type="submit" primary={true} onClick={onPrimaryButtonClicked} />
                </div>
            </div>
        </div>
    )
}

export default CreatePage;