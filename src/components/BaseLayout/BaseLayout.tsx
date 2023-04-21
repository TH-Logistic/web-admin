import NotificationIcon from './../../assets/notification.svg';
import SideBar from '../SideBar/SideBar';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
export default function BaseLayout() {
    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
            <div className="flex flex-row items-center py-4">
                <p className='pl-8 text-lg font-bold basis-1/12'>Logo</p>
                <div className='flex items-center justify-between flex-grow'>
                    <p className='flex-1 text-lg font-bold ml-14'>Dashboard</p>
                    <div className='flex flex-row mr-4'>
                        <p>{new Date().getHours() + ':' + new Date().getMinutes()}</p>
                        <div className='mx-4 border border-black' />
                        <img src={NotificationIcon} alt='Notification Icon' />
                    </div>
                </div>
            </div>
            <div className='border-[0.5px] border-border-color' />
            <div className='flex flex-row flex-1 overflow-auto'>
                <div className='max-w-[16.67%] basis-1/12 min-w-fit'>
                    <SideBar />
                </div>
                <div className='overflow-auto border-l-[1px] border-border-color border-t-[0px] flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}