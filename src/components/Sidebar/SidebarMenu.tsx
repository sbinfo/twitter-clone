'use client'

import IconHomeOutlined from '@mui/icons-material/HomeOutlined'
import ActiveHomeIcon from '@mui/icons-material/Home'
import IconSearch from '@mui/icons-material/SearchOutlined'
import ActiveIconSearch from '@mui/icons-material/Search'
import IconNotificationsOutlined from '@mui/icons-material/NotificationsNoneOutlined'
import ActiveNotificationsIcon from '@mui/icons-material/Notifications'
import IconEmailOutlined from '@mui/icons-material/EmailOutlined'
import ActiveEmailIcon from '@mui/icons-material/Email'
import SidebarMenuItem from './SidebarMenuItem'
import ArticleIcon from '@mui/icons-material/ArticleOutlined'
import ActiveArticleIcon from '@mui/icons-material/Article'
import IconPersonOutlined from '@mui/icons-material/PersonOutlineOutlined'
import ActivePersonIcon from '@mui/icons-material/Person'

import style from './sidebarMenu.module.css'

// type MenuItemType = {
//     id: String,
//     title: String,
//     icon: ReactNode,
//     link: string
// }

function SidebarMenu() {

    const menuItems = [
        { 
            id: 'home', title: 'Home', 
            icon: <IconHomeOutlined className={style.iconStyle} />,
            activeIcon: <ActiveHomeIcon className={style.iconStyle}/>,
            link: '/'
        },
        { 
            id: 'explore', title: 'Explore', 
            icon: <IconSearch className={style.iconStyle} />,
            activeIcon: <ActiveIconSearch className={style.iconStyle}/>,
            link: '/explore' 
        },
        { 
            id: 'notifications', title: 'Notifications', 
            icon: <IconNotificationsOutlined className={style.iconStyle} />, 
            activeIcon: <ActiveNotificationsIcon className={style.iconStyle}/>,
            link: '/notifications'
        },
        { 
            id: 'messages', title: 'Messages',
            icon: <IconEmailOutlined className={style.iconStyle} />,
            activeIcon: <ActiveEmailIcon className={style.iconStyle}/>,
            link: '/messages'
        },
        {
            id: 'lists', title: 'Lists',
            icon: <ArticleIcon className={style.iconStyle} />,
            activeIcon: <ActiveArticleIcon className={style.iconStyle}/>,
            link: '/lists'
        },
        {
            id: 'profile', title: 'Profile',
            icon: <IconPersonOutlined className={style.iconStyle} />,
            activeIcon: <ActivePersonIcon className={style.iconStyle}/>,
            link: '/profile'
        },
    ]

    return (
        <ul className={style.sidebarMenu}>
            {
                menuItems.map((item) => {
                    return (
                        <SidebarMenuItem
                            key={item.id}
                            link={item.link}
                            icon={item.icon}
                            activeIcon={item.activeIcon}
                            title={item.title}
                        />
                    )
                })
            }
        </ul>
    )
}

export default SidebarMenu