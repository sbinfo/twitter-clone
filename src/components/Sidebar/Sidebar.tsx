import React from 'react'
import styles from './sidebar.module.scss'
// Material
import { Box } from '@mui/material'
// Components
import SidebarMenu from './SidebarMenu'
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'


export default function Sidebar() {
    return (
        <Box className={styles.sidebar}>
            <SidebarHeader />
            <SidebarMenu />
            <SidebarFooter />
        </Box>
    );
}