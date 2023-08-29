
import {Avatar, Button, CircularProgress, Divider, IconButton, TextField} from "@mui/material";
import ImageIcon from '@mui/icons-material/ImageOutlined';
import GifIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/BallotOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

import styles from "./whatIsHappening.module.scss"

export const WhatIsHappeningForm = () => {
    return (
        <div className={styles.whatIsHappening}>
            <div>
                <Avatar className={styles.avatar}>H</Avatar>
                <InputForm />
            </div>
        </div>
    )
}

const InputForm = () => {
    return (
        <div className={styles.InputForm}>
            <TextField
                id="standard-basic"
                variant="standard"
                placeholder="What is happening?"
                multiline
                maxRows={15}
                className={styles.form}
                InputProps={{
                    disableUnderline: true,
                    style: { fontSize: '20px' }
                }}
            />
            <InputFormActions />
        </div>
    )
}

const InputFormActions = () => {
    return (
        <div className={styles.actions}>
                <div className={styles.buttonIcons}>
                    <IconButton className={styles.fileUpload}>
                        <ImageIcon fontSize="small" />
                    </IconButton>
                    <IconButton className={styles.fileUpload}>
                        <GifIcon fontSize="small" />
                    </IconButton>
                    <IconButton className={styles.fileUpload}>
                        <PollIcon fontSize="small" />
                    </IconButton>
                    <IconButton className={styles.fileUpload}>
                        <EmojiIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className={styles.postAndProgress}>
                    <CircularProgress
                        className={styles.messageProgress}
                        variant="determinate"
                        size={20}
                        value={85}
                    />
                    <Divider
                        style={{ height: '28px', margin: '0 18px' }}
                        orientation='vertical'
                    />
                    <Button
                        variant="contained"
                        className={styles.postButton} 
                    >
                        Post
                    </Button>
                </div>
            </div>
    )
}
