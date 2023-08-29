import { Button } from "@mui/material"

function SidebarFooter () {
    return (
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
    )
}

export default SidebarFooter