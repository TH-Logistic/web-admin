import NotificationIcon from './../../assets/notification.svg';
import LogoutIcon from './../../assets/logout.svg';
import SideBarItem from '../../components/SideBar/SideBarItem';
import OrderIcon from './../../assets/order.svg';
import OrderChoseIcon from './../../assets/order-chose.svg';
import ProductIcon from './../../assets/product.svg';
import ProductChoseIcon from './../../assets/product-chose.svg';
import RouteIcon from './../../assets/route.svg';
import RouteChoseIcon from './../../assets/route-choose.svg';
import TruckIcon from './../../assets/truck.svg';
import TruckChoseIcon from './../../assets/truck-choose.svg';
import CustomerIcon from './../../assets/customer.svg';
import CustomerChoseIcon from './../../assets/customer-chose.svg';
import DriverIcon from './../../assets/driver.svg';
import DriverChoseIcon from './../../assets/driver.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { useState } from 'react';
export default function OrderPage() {


    const menus = {
        order: {
            "name": 'Order',
            icon: OrderIcon,
            choseIcon: OrderChoseIcon
        },
        product: {
            name: 'Product',
            icon: ProductIcon,
            choseIcon: ProductChoseIcon
        },
        route: {
            name: 'Route',
            icon: RouteIcon,
            choseIcon: RouteChoseIcon
        },
        truck: {
            name: 'Truck',
            icon: TruckIcon,
            choseIcon: TruckChoseIcon
        },
        customer: {
            name: 'Customer',
            icon: CustomerIcon,
            choseIcon: CustomerChoseIcon
        },
        driver: {
            name: 'Driver',
            icon: DriverIcon,
            choseIcon: DriverChoseIcon
        }
    }

    const [choseMenu, setChoseMenu] = useState(menus.order.name)


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
                        {
                            Object
                                .values(menus)
                                .map((menu) => <
                                    SideBarItem
                                    onClick={() => { setChoseMenu(menu.name) }}
                                    name={menu.name}
                                    icon={choseMenu === menu.name ? menu.choseIcon : menu.icon}
                                    isChose={choseMenu === menu.name}
                                />)
                        }
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
