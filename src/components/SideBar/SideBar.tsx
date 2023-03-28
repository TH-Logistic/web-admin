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
import LocationIcon from './../../assets/location.svg';
import LocationChoseIcon from './../../assets/location-chose.svg';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
export default function SideBar() {
    const location = useLocation()
    const navigate = useNavigate()

    const menus = {
        order: {
            name: 'Order',
            icon: OrderIcon,
            choseIcon: OrderChoseIcon,
            path: ROUTES.ORDERS.path
        },
        product: {
            name: 'Product',
            icon: ProductIcon,
            choseIcon: ProductChoseIcon,
            path: ROUTES.PRODUCTS.path
        },
        route: {
            name: 'Route',
            icon: RouteIcon,
            choseIcon: RouteChoseIcon,
            path: ROUTES.ROUTES.path
        },
        location: {
            name: 'Location',
            icon: LocationIcon,
            choseIcon: LocationChoseIcon,
            path: ROUTES.LOCATIONS.path
        },
        truck: {
            name: 'Truck',
            icon: TruckIcon,
            choseIcon: TruckChoseIcon,
            path: ROUTES.TRUCKS.path
        },
        customer: {
            name: 'Customer',
            icon: CustomerIcon,
            choseIcon: CustomerChoseIcon,
            path: ROUTES.CUSTOMERS.path
        },
        driver: {
            name: 'Driver',
            icon: DriverIcon,
            choseIcon: DriverChoseIcon,
            path: ROUTES.DRIVERS.path
        }
    }

    return (
        <div className='flex flex-col py-8 basis-1/5'>
            <div className='flex-1 space-y-1/12'>
                {
                    Object
                        .values(menus)
                        .map((menu) => <
                            SideBarItem
                            onClick={() => navigate(menu.path)}
                            name={menu.name}
                            icon={location.pathname === menu.path ? menu.choseIcon : menu.icon}
                            isChose={location.pathname === menu.path}
                        />)
                }
            </div>

            <SideBarItem
                onClick={() => navigate(ROUTES.AUTH.path)}
                name='Log out'
                icon={LogoutIcon}
                isChose={false}
            />
        </div>
    )
}