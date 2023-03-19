
export default function SideBarItem(props: { name: string, icon: string }) {
    return <div className='flex flex-row'>
        <div className='mx-4 border-2 border-primary-color' />
        <img src={props.icon} alt='Order Icon' />
        <p className='py-2 ml-4 font-semibold break-words'>{props.name}</p>
    </div>;
}