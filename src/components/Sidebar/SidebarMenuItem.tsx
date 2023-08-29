import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router"

import style from './sidebarMenuItem.module.scss'
import { IconButton } from "@mui/material"

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
                    <IconButton size="large" style={{ color: 'black' }}>
                        { menuIcon }
                    </IconButton>
                    <h3 className={style.title}>{title}</h3>
                </div>
            </Link>
        </li>
    )
}

export default SidebarMenuItem