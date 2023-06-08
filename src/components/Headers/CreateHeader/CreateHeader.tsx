import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../assets/close.svg';
import BaseHeader from '../BaseHeader/BaseHeader';

type CreateHeaderProps = React.PropsWithChildren<{
    header: string;
}> & React.ComponentProps<typeof BaseHeader>;

export default function CreateHeader({ header, children, centerItems }: CreateHeaderProps) {
    const navigate = useNavigate();

    return (
        <BaseHeader centerItems={centerItems}>
            <img src={CloseIcon} alt="close" className='w-4 mt-2 mr-4' onClick={() => navigate(-1)} />
            <div className='w-full'>
                <p className='text-lg font-semibold'>{header}</p>
                {children}
            </div>
        </BaseHeader >
    )
}