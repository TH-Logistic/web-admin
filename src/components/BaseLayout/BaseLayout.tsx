import NotificationIcon from './../../assets/notification.svg';
import SideBar from '../SideBar/SideBar';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import { useEffect, useState } from 'react';
import { ROUTES } from '../../utils/routes';
import { millisecondToHHMM } from '../../utils/formatter';
export default function BaseLayout() {
    const { loggedIn } = useAuth();
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        setInterval(() => setTime(Date.now()))
    }, [])

    if (!loggedIn) {
        return (<Navigate to={ROUTES.AUTH} />)
    }

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
            <div className="flex flex-row items-center py-4">
                <p className='pl-8 text-lg font-bold basis-1/12'>Logo</p>
                <div className='flex items-center justify-between flex-grow'>
                    <p className='flex-1 text-lg font-bold ml-14'>Dashboard</p>
                    <div className='flex flex-row mr-4'>
                        <p>{millisecondToHHMM(time)}</p>
                        <div className='mx-4 border border-black' />
                        <img src={NotificationIcon} alt='Notification Icon' />
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-b-0 border-border-color' />
            <div className='flex flex-row flex-1 overflow-auto'>
                <div className='max-w-[16.67%] basis-1/12 min-w-fit hidden md:block'>
                    <SideBar />
                </div>
                <div className='overflow-auto border-l-[1px] border-border-color border-t-[0px] flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}