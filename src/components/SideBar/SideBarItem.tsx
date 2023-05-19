import './SideBarItem.css'
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg'
import { MenuItem } from './SideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * isChose: Indicate that this menu is current chose
 * submenu: List available submenus
 * isSubItem: Indicate that this menu is a submenu or not
 */
export default function SideBarItem(props: {
    name: string,
    path: string,
    icon?: string,
    isChose: boolean,
    submenu?: { [key: string]: MenuItem },
    isSubItem: boolean,
    onClick?: () => void,
}) {

    const [isShowingSubMenu, setIsShowingSubMenu] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className={`flex flex-col ${props.isSubItem ? 'mx-0' : 'mx-4'} mt-0`} >
            <div className='flex items-center mr-4 sm:mr-2 ' onClick={props.submenu ? () => setIsShowingSubMenu(!isShowingSubMenu) : () => {
                props.onClick?.();
                navigate(props.path)
            }}>
                <div className={`${!props.isSubItem && props.isChose ? 'visible' : 'invisible'} h-10 border-2 border-primary-color`} />
                <div className='flex items-center w-full px-2 py-2 ml-2 rounded-md hover:bg-primary-color/20'>
                    {props.icon ? < img src={props.icon} alt='Order Icon' className='object-contain w-5 h-5 ' /> : <></>}
                    <p className={`mx-2 text-sm font-semibold break-words ${props.isChose ?
                        `font-semibold ${props.isSubItem
                            ? 'text-primary-color' :
                            'text-secondary-dark'}`
                        : 'font-normal text-disabled'}`
                    }>{props.name}</p>
                    <div className='flex-1' />
                    {props.submenu ? <></> : <></>}
                    {props.submenu ? <img className='duration-700' src={isShowingSubMenu ? ArrowDown : ArrowUp} alt='arrow down' /> : <></>}
                </div>
            </div>

            {
                <div className={`ml-6 duration-1000 transition ${isShowingSubMenu ? 'visible' : 'hidden'}`}>
                    {
                        props.submenu
                            ? Object.entries(props.submenu).map(subitem => <SideBarItem
                                key={subitem[1].name}
                                name={subitem[1].name}
                                isChose={location.pathname === subitem[1].path}
                                isSubItem={true}
                                path={subitem[1].path ?? '/'}
                            />)
                            : <></>
                    }
                </div>
            }
        </div >
    );
}