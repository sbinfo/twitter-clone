import { ReactNode } from "react"
// Next
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Url } from "next/dist/shared/lib/router/router"
// Material
import { IconButton } from "@mui/material"
import style from './sidebarMenuItem.module.scss'


type MenuItemPropsType = {
    link: Url,
    icon: ReactNode,
    activeIcon: ReactNode,
    title: String,
}

function SidebarMenuItem({ link, icon, activeIcon, title }: MenuItemPropsType) {

    let menuIcon = icon
    let classes = style.sidebarMenuItem
    if (usePathname() === link) {
        classes += ` ${style.sidebarMenuItem__active}`
        menuIcon = activeIcon
    }

    return (
        <li>
            <Link href={link}>
                <div className={classes}>
                    <IconButton
                        className={style.sidebarIconButton}
                        size="large"
                    >
                        { menuIcon }
                    </IconButton>
                    <h3 className={style.title}>{title}</h3>
                </div>
            </Link>
        </li>
    )
}

export default SidebarMenuItem