"use client"

import * as React from 'react';
import { Avatar, Button, CircularProgress, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, TextField } from "@mui/material";
import ImageIcon from '@mui/icons-material/ImageOutlined';
import GifIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/BallotOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/AlternateEmailRounded';

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
        <div className={styles.inputForm}>
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
            <WhoCanReply />
            <InputFormActions />
        </div>
    )
}

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum CanReply {
    EveryOne = 'Everyone',
    YouFollow = 'People you follow',
    YouMention = 'Only people you mention'
}

const WhoCanReply = () => {

    const [selectedAuditory, setSelectedAuditory] = React.useState<CanReply>(CanReply.EveryOne)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeAuditory = (value: CanReply) => {
        setSelectedAuditory(value);
        setAnchorEl(null);
    };

    return (
        <>
            <div
                className={styles.whoCanReply}
                onClick={handleClick}
            >
                <PublicIcon style={{ fontSize: '16px', marginRight: '4px' }} />
                {selectedAuditory} can reply
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Paper sx={{ width: 320, maxWidth: '100%' }}>
                    <div style={{ padding: '20px' }}>
                        <h4>Who can reply?</h4>
                        <div>Choose who can reply to this post. Anyone mentioned can always reply.</div>
                    </div>
                    <MenuList>
                        <MenuItem onClick={() => changeAuditory(CanReply.EveryOne)}>
                            <ListItemIcon style={{
                                padding: '8px', 
                                background: '#1d9bf0', 
                                borderRadius: '50%', 
                                marginRight: '10px'
                            }}>
                                <PublicIcon style={{ color: '#fff', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText>{CanReply.EveryOne}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => changeAuditory(CanReply.YouFollow)}>
                            <ListItemIcon
                                style={{
                                    padding: '8px', 
                                    background: '#1d9bf0', 
                                    borderRadius: '50%', 
                                    marginRight: '10px'
                                }}
                            >
                                <PersonAddIcon style={{ color: '#fff', fontSize: '20px' }}  />
                            </ListItemIcon>
                            <ListItemText>{CanReply.YouFollow}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => changeAuditory(CanReply.YouMention)}>
                            <ListItemIcon
                                style={{
                                    padding: '8px', 
                                    background: '#1d9bf0', 
                                    borderRadius: '50%', 
                                    marginRight: '10px'
                                }}
                            >
                                <EmailIcon style={{ color: '#fff', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText>{CanReply.YouMention}</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Menu>
        </>
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
