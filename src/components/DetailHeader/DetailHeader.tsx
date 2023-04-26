import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '../../assets/arrow-left.svg';

type DetailHeaderProps = {
    header: string;
    id: string;
}

export default function DetailHeader(props: DetailHeaderProps) {
    const navigate = useNavigate();

    return (
        <div className='flex items-center p-8'>
            <img src={ArrowLeftIcon} alt="close" className='w-2 mr-6' onClick={() => navigate(-1)} />
            <p className='text-lg font-semibold'>{props.header}</p>
            <p className='ml-4 text-lg font-bold text-primary-color'>{props.id}</p>
        </div>
    )
}