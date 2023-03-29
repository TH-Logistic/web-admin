import './SideBarItem.css'
import ArrowDown from '../../assets/arrow-down.svg'
import ArrowUp from '../../assets/arrow-up.svg'
export default function SideBarItem(props: {
    name: string,
    icon: string,
    isChose: boolean,
    subitem?: boolean,
    onClick: VoidFunction
}) {

    return (
        <div className='flex flex-col px-4'>
            <div className='flex flex-row items-start transition duration-300 bg-red-500 rounded-md hover:bg-primary-color/20' onClick={props.onClick}>
                <div className={`border-2 ${props.isChose ? 'border-primary-color' : 'border-transparent'}`} />
                <div className='flex flex-row items-center'>
                    <img src={props.icon} alt='Order Icon' className='object-contain w-5 h-5' />
                    <p className={`py-2 mx-2 font-semibold break-words ${props.isChose ? 'font-semibold' : 'font-normal text-disabled'}`}>{props.name}</p>
                    <img className='mr-4' src={ArrowDown} alt='arrow down' />
                </div>
            </div>
            <p className={`ml-7 ${props.isChose ? 'font-semibold' : 'font-normal text-disabled'}`}>Delivery</p>
            {/* <div className='flex flex-row items-start transition duration-300 rounded-md hover:bg-primary-color/20' onClick={props.onClick}>
                <div className={`border-2 ${props.isChose ? 'border-primary-color' : 'border-transparent'}`} />
                <div className='flex items-center flex-1 px-4 ml-2 mr-4 '>
                    <img src={props.icon} alt='Order Icon' className='object-contain w-5 h-5' />
                    <div>
                        <p className={`side-bar-item-title ${props.isChose ? 'font-semibold' : 'font-normal text-disabled'}`}>{props.name}</p>
                        <p className='self-end'>Delivery</p>
                    </div>
                </div>
                <img className='mr-4' src={ArrowDown} alt='arrow down' />
            </div> */}

        </div>
    );
}