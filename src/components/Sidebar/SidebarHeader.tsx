import Link from 'next/link'
import { Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SidebarHeader() {
    return (
        <Link href='/'>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
                <TwitterIcon color="primary" fontSize="large" />
            </Box>
        </Link>
    )
}