import NotificationIcon from './../../assets/notification.svg';
import SideBar from '../SideBar/SideBar';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
export default function BaseLayout() {
    return (
        <div>
            <div className="flex flex-col h-screen max-h-screen overflow-hidden">
                <div className="flex flex-row items-center px-8 py-4">
                    <p className='text-lg font-bold basis-1/5'>Logo</p>
                    <p className='flex-1 text-lg font-bold'>Dashboard</p>
                    <div className='flex flex-row'>
                        <p>{new Date().getHours() + ':' + new Date().getMinutes()}</p>
                        <div className='mx-4 border border-black' />
                        <img src={NotificationIcon} alt='Notification Icon' />
                    </div>
                </div>
                <div className='border-[0.5px] border-border-color' />
                <div className='flex flex-row flex-1 overflow-auto'>
                    <SideBar />
                    <div className='overflow-auto border-l-[1px] border-border-color border-t-[0px] flex-1'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}