import NotificationIcon from './../../assets/notification.svg';
import LogoutIcon from './../../assets/logout.svg';
import SideBarItem from '../../components/SideBar/SideBarItem';
import OrderIcon from './../../assets/order.svg';
import ProductIcon from './../../assets/product.svg';
import RouteIcon from './../../assets/route.svg';
import TruckIcon from './../../assets/truck.svg';
import CusomterIcon from './../../assets/customer.svg';
import DriverIcon from './../../assets/driver.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
export default function OrderPage() {
    return (
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
            <hr className='border-[0.5px] border-slate-400/25' />
            <div className='flex flex-1'>
                <div className='flex flex-col py-8 basis-1/5'>
                    <div className='flex-1 space-y-1/12'>
                        <SideBarItem name='Order' icon={OrderIcon} />
                        <SideBarItem name='Product' icon={ProductIcon} />
                        <SideBarItem name='Route' icon={RouteIcon} />
                        <SideBarItem name='Truck' icon={TruckIcon} />
                        <SideBarItem name='Customer' icon={CusomterIcon} />
                        <SideBarItem name='Driver' icon={DriverIcon} />
                    </div>
                    <Link className='flex flex-row justify-center' to={ROUTES.AUTH.path}>
                        <img src={LogoutIcon} alt='Logout icon' />
                        <div className='w-8' />
                        <button>Log out</button>
                    </Link>
                </div>
                <div className='border-[1px] border-slate-400/25'></div>
            </div>
        </div>
    )
}
