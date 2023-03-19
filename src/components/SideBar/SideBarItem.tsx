import './SideBarItem.css'
export default function SideBarItem(props: {
    name: string,
    icon: string,
    isChose: boolean,
    onClick: VoidFunction
}) {

    return <div className='flex flex-row ' onClick={props.onClick}>
        <div className={props.isChose ? 'ml-4 border-2 border-primary-color' : 'ml-4 border-2 border-transparent'} />
        <div className='flex flex-1 px-4 ml-2 mr-4 hover:bg-primary-color/20 hover:rounded-md'>
            <img src={props.icon} alt='Order Icon' className='w-5' />
            <p className={props.isChose ? 'side-bar-item-title font-semibold' : 'side-bar-item-title font-normal text-disabled'}>{props.name}</p>
        </div>
    </div>;
}