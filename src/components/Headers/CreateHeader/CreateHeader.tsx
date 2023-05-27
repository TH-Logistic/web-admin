import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../assets/close.svg';
import BaseHeader from '../BaseHeader/BaseHeader';

type CreateHeaderProps = React.PropsWithChildren<{
    header: string;
}>;

export default function CreateHeader({ header, children }: CreateHeaderProps) {
    const navigate = useNavigate();

    return (
        <BaseHeader centerItems={true}>
            <img src={CloseIcon} alt="close" className='w-4 mt-2 mr-4' onClick={() => navigate(-1)} />
            <div className='w-full'>
                <p className='text-lg font-semibold '>{header}</p>
                {children}
            </div>
        </BaseHeader >
    )
}