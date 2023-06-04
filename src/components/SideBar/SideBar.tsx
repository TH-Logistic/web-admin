import LogoutIcon from './../../assets/logout.svg';
import SideBarItem from '../../components/SideBar/SideBarItem';
import HomeIcon from "../../assets/home.svg";
import HomeChoseIcon from "../../assets/home-fill.svg";
import OrderIcon from './../../assets/order.svg';
import OrderChoseIcon from './../../assets/order-chose.svg';
import ProductIcon from './../../assets/product.svg';
import ProductChoseIcon from './../../assets/product-chose.svg';
import RouteIcon from './../../assets/route.svg';
import RouteChoseIcon from './../../assets/route-choose.svg';
import TruckIcon from './../../assets/truck.svg';
import TruckChoseIcon from './../../assets/truck-choose.svg';
import StaffIcon from './../../assets/customer.svg';
import StaffChoseIcon from './../../assets/customer-chose.svg';
import DriverIcon from './../../assets/driver.svg';
import DriverChoseIcon from './../../assets/driver.svg';
import LocationIcon from './../../assets/location.svg';
import LocationChoseIcon from './../../assets/location-chose.svg';
import OrganizationIcon from './../../assets/organization.svg';
import OrganizationChoseIcon from './../../assets/organization-choose.svg';
import { useLocation } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';
import useAuth from '../../hooks/use-auth';
import { ROUTES } from '../../utils/routes';

export type MenuItem = {
    name: string,
    icon?: string,
    choseIcon?: string,
    path?: string,
    submenu?: { [key: string]: MenuItem }
}
export default function SideBar() {
    const location = useLocation()
    const { removeAuth } = useAuth();

    const menus: {
        [key: string]: MenuItem
    } = {
        home: {
            name: 'Home',
            icon: HomeIcon,
            choseIcon: HomeChoseIcon,
            path: ROUTES.ROOT
        },
        order: {
            name: 'Order',
            icon: OrderIcon,
            choseIcon: OrderChoseIcon,
            path: ROUTES.ORDERS
        },
        product: {
            name: 'Product',
            icon: ProductIcon,
            choseIcon: ProductChoseIcon,
            path: ROUTES.PRODUCTS
        },
        route: {
            name: 'Route',
            icon: RouteIcon,
            choseIcon: RouteChoseIcon,
            path: ROUTES.ROUTES
        },
        location: {
            name: 'Location',
            icon: LocationIcon,
            choseIcon: LocationChoseIcon,
            path: ROUTES.LOCATIONS,
            submenu: {
                delivery: {
                    name: 'Delivery',
                    path: ROUTES.DELIVERY,
                },
                garage: {
                    name: 'Garage',
                    path: ROUTES.GARAGE,
                },
            }
        },
        truck: {
            name: 'Truck',
            icon: TruckIcon,
            choseIcon: TruckChoseIcon,
            path: ROUTES.TRUCKS,
        },
        orgranization: {
            name: 'Organization',
            icon: OrganizationIcon,
            choseIcon: OrganizationChoseIcon,
            path: ROUTES.ORGANIZATIONS
        },
        driver: {
            name: 'Driver',
            icon: DriverIcon,
            choseIcon: DriverChoseIcon,
            path: ROUTES.DRIVERS,
        },
        staff: {
            name: 'Staff',
            icon: StaffIcon,
            choseIcon: StaffChoseIcon,
            path: ROUTES.STAFFS
        },
    }

    return (
        <div className='flex flex-col justify-between h-full py-4' >
            <div className='flex flex-col gap-2 overflow-auto'>
                {
                    Object
                        .values(menus)
                        .map((menu) => {
                            // const indexRoute = Object.values(ROUTES.HOME.subroutes!).filter((route) => route.index === true)[0]
                            const indexRoute = ROUTES.ROOT
                            const isChose =
                                // Sublocation is chose
                                `/${location.pathname.split('/')[1]}` === menu.path ||

                                // This is index route
                                (location.pathname === ROUTES.ROOT && menu.path === indexRoute);
                            return (
                                <
                                    SideBarItem
                                    key={menu.name}
                                    name={menu.name}
                                    path={menu.path ?? '/'}
                                    submenu={menu.submenu}
                                    icon={isChose ? menu.choseIcon : menu.icon}
                                    isSubItem={false}
                                    isChose={isChose}
                                />
                            )
                        })
                }
            </div>

            <SideBarItem
                onClick={removeAuth}
                key='Log out'
                path={ROUTES.AUTH}
                name='Log out'
                isSubItem={false}
                icon={LogoutIcon}
                isChose={false}
            />
        </div >
    )
}