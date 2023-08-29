import React from 'react'
import styles from './sidebar.module.scss'
import Link from 'next/link'
// Material
import { Box, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
// Components
import style from './sidebar.module.scss'
import SidebarMenu from './SidebarMenu'


export default function Sidebar() {
    return (
        <Box className={styles.sidebar}>
            <SidebarHeader />
            <SidebarMenu />
            <SidebarFooter />
        </Box>
    );
}

function SidebarHeader() {
    return (
        <Link href='/'>
            <Box className={style.sidebarHeader}>
                <TwitterIcon
                    fontSize="large"
                    className={style.sidebarLogo}
                />
            </Box>
        </Link>
    )
}

function SidebarFooter () {
    return (
        <Button
            variant="contained"
            className={style.tweetButton} 
        >
            Tweet
        </Button>
    )
}
