import NotificationIcon from './../../assets/notification.svg';
import SideBar from '../SideBar/SideBar';
export default function BaseLayout(props: { content: React.ReactElement }) {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="flex items-center px-8 py-4 fle-ro">
                    <p className='text-lg font-bold basis-1/5'>Logo</p>
                    <p className='flex-1 text-lg font-bold'>Dashboard</p>
                    <div className='flex flex-row'>
                        <p>{new Date().getHours() + ':' + new Date().getMinutes()}</p>
                        <div className='mx-4 border border-black' />
                        <img src={NotificationIcon} alt='Notification Icon' />
                    </div>
                </div>
                <div className='border-[0.5px] border-border-color' />
                <div className='flex flex-1'>
                    <SideBar />
                    <div className='border-l-[1px] border-border-color border-t-[0px] flex-1'>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}