import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../assets/close.svg';
import BaseHeader from '../BaseHeader/BaseHeader';

type CreateHeaderProps = {
    header: string;
}

export default function CreateHeader({ header }: CreateHeaderProps) {
    const navigate = useNavigate();

    return (
        <BaseHeader>
            <img src={CloseIcon} alt="close" className='w-4 mr-4' onClick={() => navigate(-1)} />
            <p className='text-lg font-semibold'>{header}</p>
        </BaseHeader>
    )
}