import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/arrow-left.svg';
import BaseHeader from '../BaseHeader/BaseHeader';

type DetailHeaderProps = React.PropsWithChildren<{
    header: string;
    id?: string;
    centerHeaderItems?: boolean
}>

export default function DetailHeader({ centerHeaderItems = true,
    id,
    header,
    children
}: DetailHeaderProps) {
    const navigate = useNavigate();

    return (
        <BaseHeader centerItems={centerHeaderItems}>
            <img src={ArrowLeftIcon} alt="close" className='w-2' onClick={() => navigate(-1)} />
            <p className='text-lg font-semibold'>{header}</p>
            {id && <p className='text-lg font-bold text-primary-color'>{id}</p>}
            {children}
        </BaseHeader>
    )
}