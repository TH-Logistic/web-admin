import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/arrow-left.svg';
import BaseHeader from '../BaseHeader/BaseHeader';

type DetailHeaderProps = {
    header: string;
    id?: string;
}

export default function DetailHeader(props: DetailHeaderProps) {
    const navigate = useNavigate();

    return (
        <BaseHeader>
            <img src={ArrowLeftIcon} alt="close" className='w-2' onClick={() => navigate(-1)} />
            <p className='text-lg font-semibold'>{props.header}</p>
            {props.id && <p className='text-lg font-bold text-primary-color'>{props.id}</p>}
        </BaseHeader>
    )
}