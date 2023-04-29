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
import StaffIcon from './../../assets/customer.svg';
import StaffChoseIcon from './../../assets/customer-chose.svg';
import DriverIcon from './../../assets/driver.svg';
import DriverChoseIcon from './../../assets/driver.svg';
import LocationIcon from './../../assets/location.svg';
import LocationChoseIcon from './../../assets/location-chose.svg';
import OrganizationIcon from './../../assets/organization.svg';
import OrganizationChoseIcon from './../../assets/organization-choose.svg';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { Menu, MenuItem, Sidebar, SubMenu, menuClasses } from 'react-pro-sidebar';

export type MenuItem = {
    name: string,
    icon?: string,
    choseIcon?: string,
    path?: string,
    submenu?: { [key: string]: MenuItem }
}
export default function SideBar() {
    const location = useLocation()
    const navigate = useNavigate()

    const menus: {
        [key: string]: MenuItem
    } = {
        order: {
            name: 'Order',
            icon: OrderIcon,
            choseIcon: OrderChoseIcon,
            path: ROUTES.HOME.subroutes?.ORDERS.path
        },
        product: {
            name: 'Product',
            icon: ProductIcon,
            choseIcon: ProductChoseIcon,
            path: ROUTES.HOME.subroutes?.PRODUCTS.path
        },
        route: {
            name: 'Route',
            icon: RouteIcon,
            choseIcon: RouteChoseIcon,
            path: ROUTES.HOME.subroutes?.ROUTES.path
        },
        location: {
            name: 'Location',
            icon: LocationIcon,
            choseIcon: LocationChoseIcon,
            path: ROUTES.HOME.subroutes?.LOCATIONS.path,
            submenu: {
                delivery: {
                    name: 'Delivery',
                    path: ROUTES.HOME.subroutes?.DELIVERY.path,
                },
                garage: {
                    name: 'Garage',
                    path: ROUTES.HOME.subroutes?.GARAGE.path,
                },
            }
        },
        truck: {
            name: 'Truck',
            icon: TruckIcon,
            choseIcon: TruckChoseIcon,
            path: ROUTES.HOME.subroutes?.TRUCKS.path,
        },
        orgranization: {
            name: 'Organization',
            icon: OrganizationIcon,
            choseIcon: OrganizationChoseIcon,
            path: ROUTES.HOME.subroutes?.ORGARNIZATION.path
        },
        driver: {
            name: 'Driver',
            icon: DriverIcon,
            choseIcon: DriverChoseIcon,
            path: ROUTES.HOME.subroutes?.DRIVERS.path,
        },
        staff: {
            name: 'Staff',
            icon: StaffIcon,
            choseIcon: StaffChoseIcon,
            path: ROUTES.HOME.subroutes?.STAFFS.path
        },
    }

    return (
        // <Sidebar breakPoint='sm' className='flex flex-col py-4 basis-1/5'>
        //     <Menu className='h-full bg-transparent' menuItemStyles={{
        //         'button': {
        //             '&:hover': {
        //                 backgroundColor: 'rgb(0, 173, 181, 0)',
        //             },
        //         },
        //     }}>
        //         {Object.entries(menus).map((menu) => {
        //             return menu[1].submenu ? (
        //                 <SubMenu
        //                     className='duration-500 rounded-sm hover:bg-primary-color/20'
        //                     component={<Link to={menu[1].path} />}
        //                     icon={
        //                         <div className='flex items-center'>
        //                             <div className={`${location.pathname === menu[1].path ? 'visible' : 'invisible'} h-10 mr-2 border-2 border-primary-color`} />
        //                             <img src={menu[1].icon} className='w-5 h-5' alt='icon' />
        //                         </div>
        //                     }
        //                     label={menu[1].name}>
        //                     {
        //                         Object
        //                             .entries(menu[1].submenu)
        //                             .map(submenu => (
        //                                 <MenuItem
        //                                     className='ml-6'
        //                                     component={<Link to={submenu[1].path} />}
        //                                 >
        //                                     {submenu[1].name}
        //                                 </MenuItem>
        //                             ))
        //                     }
        //                 </SubMenu >
        //             ) :
        //                 <MenuItem icon={
        //                     <div className='flex items-center'>
        //                         <div className={`${location.pathname === menu[1].path ? 'visible' : 'invisible'} h-10 mr-2 border-2 border-primary-color`} />
        //                         <img src={menu[1].icon} className='w-5 h-5' alt='icon' />
        //                     </div>
        //                 }
        //                     className='duration-500 rounded-sm hover:bg-primary-color/20'
        //                     component={<Link to={menu[1].path} />}>
        //                     {menu[1].name}
        //                 </MenuItem>
        //         })}
        //     </Menu>
        //     <Menu className='flex-1'>

        //         <MenuItem icon={
        //             <div className='flex items-center'>
        //                 <img src={LogoutIcon} className='w-5 h-5' alt='icon' />
        //             </div>
        //         } component={<Link to={'/auth'} />}>
        //             Logout
        //         </MenuItem>
        //     </Menu>
        // </Sidebar>


        <div className='flex flex-col justify-between h-full py-4' >
            <div className='flex flex-col gap-2 overflow-auto'>
                {
                    Object
                        .values(menus)
                        .map((menu) => {
                            const indexRoute = Object.values(ROUTES.HOME.subroutes!).filter((route) => route.index === true)[0]
                            const isChose =
                                // Sublocation is chose
                                `/${location.pathname.split('/')[1]}` === menu.path ||

                                // This is index route
                                (location.pathname === '/' && menu.path === indexRoute.path);
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
                key='Log out'
                path={'/auth/login'}
                name='Log out'
                isSubItem={false}
                icon={LogoutIcon}
                isChose={false}
            />
        </div >
    )
}