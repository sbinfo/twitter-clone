import React from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'

// Material
import { Box, MenuList, MenuItem, ListItemIcon, ListItemText, Button, Typography } from '@mui/material'
import IconHome from '@mui/icons-material/Home'
import IconSearch from '@mui/icons-material/Search'
import IconNotifications from '@mui/icons-material/Notifications'
import IconEmail from '@mui/icons-material/Email'
import IconPerson from '@mui/icons-material/Person'
import Image from 'next/image'

const Navbar = () => {

    const menuItems = [
        { id: 'home', title: 'Home', icon: <IconHome />, link: '/' },
        { id: 'explore', title: 'Explore', icon: <IconSearch />, link: '/explore' },
        { id: 'notifications', title: 'Notifications', icon: <IconNotifications />, link: '/notifications' },
        { id: 'messages', title: 'Messages', icon: <IconEmail />, link: '/messages' },
        { id: 'profile', title: 'Profile', icon: <IconPerson />, link: '/profile' },
    ]


    return (
        <Box className={styles.navbar}>
            <Link href='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/logo.png"  width={52} height={52} alt='Logo' placeholder="blur" blurDataURL={'/logo.png'}/>
                    <Typography variant='h6' sx={{ color: '#00acee', fontWeight: 'bold' }}>
                        Switter
                    </Typography>
                </Box>
            </Link>
            <MenuList>
                {
                    menuItems.map((item) => {
                        return (
                            <Link href={item.link}>
                                <MenuItem
                                key={item.id}
                                sx={{ my: '6px' }}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{ fontSize: '18px' }}>
                                    {item.title}
                                </ListItemText>
                            </MenuItem>
                            </Link>
                        )
                    })
                }
            </MenuList>

            {/* <Divider sx={{ mb: '20px'}}></Divider> */}

            <Button sx={{
                borderRadius: '50px',
                width: '100%',
                height: '48px',
                fontWeight: 'bold'
            }}
                variant="contained"
            >
                Post
            </Button>
        </Box>
    );
}

export default Navbar