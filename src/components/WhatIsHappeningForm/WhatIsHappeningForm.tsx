
import {Avatar, Box, Grid, TextField} from "@mui/material";

export const WhatIsHappeningForm = () => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <Avatar>H</Avatar>
            </Grid>

            <Grid item xs={10}>
                <TextField
                    style={{ width: '100%'}}
                    id="outlined-textarea"
                    placeholder="What is happening?"
                    multiline
                />
            </Grid>
        </Grid>
    )
}
