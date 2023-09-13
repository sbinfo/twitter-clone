import { Avatar, Icon, IconButton } from "@mui/material"
import styles from "./post.module.css"

export default function Post(props: IPost) {
    const {
        displayName,
        userName,
        verified,
        avatar,
        text,
        postTime,
        fileUrl
    } = props

    return (
        <div className={styles.post}>
            <div className={styles.postAvatar}>
                <Avatar>SB</Avatar>
            </div>
            <div className={styles.postBody}>
                <PostHeader
                    displayName={displayName}
                    userName={userName}
                    verified={verified}
                    postTime={postTime}
                />
                <PostContent
                    text={text}
                    fileUrl={fileUrl}
                />
                <PostFooter />
            </div>
        </div>
    )
}


import VerifiedIcon from '@mui/icons-material/Verified'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

type PostHeaderPropsType = {
    displayName: String,
    userName: String,
    verified: Boolean,
    postTime: any
}

function PostHeader({ displayName, userName, verified, postTime }: PostHeaderPropsType) {
    return (
        <div className={styles.postHeader}>
            <div className={styles.postUserInfo}>
                <span className={styles.postUserDisplayName}>{displayName}</span>
                {verified && <VerifiedIcon className={styles.postVerified} fontSize="small" />}
                <span style={{ marginLeft: '4px' }}>{userName}</span>
                <span style={{ margin: '0 4px' }}>&#183;</span>
                <span>{postTime}</span>
            </div>
            <div className={styles.postHeaderOptions}>
                <IconButton size="small">
                    <MoreHorizIcon />
                </IconButton>
            </div>
        </div>
    )
}


type PostContentPropsType = {
    text: string,
    fileUrl: string
}

function PostContent({ text, fileUrl }: PostContentPropsType) {

    const postImage = <img src={fileUrl} alt="post image" className={styles.postImage} />

    return (
        <div className={styles.postContent}>
            {text}
            {fileUrl && postImage}
        </div>
    )
}


import ReplyIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import RepostIcon from '@mui/icons-material/RepeatOutlined'
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ViewIcon from '@mui/icons-material/VisibilityOutlined'
import ShareIcon from '@mui/icons-material/FileUploadOutlined'
import IPost from "@/store/models/IPost";

function PostFooter() {
    return (
        <div className={styles.postFooter}>
            <div className={styles.postFooterButton}>
                <IconButton>
                    <ReplyIcon className={styles.postFooterIcon}/>
                </IconButton>
                <span>445</span>
            </div>
            <div className={styles.postFooterButton}>
                <IconButton>
                    <RepostIcon className={styles.postFooterIcon}/>
                </IconButton>
                <span>772</span>
            </div>
            <div className={styles.postFooterButton}>
                <IconButton>
                    <LikeIcon className={styles.postFooterIcon}/>
                </IconButton>
                <div>
                    <span>6,544</span>
                </div>
            </div>
            <div className={styles.postFooterButton}>
                <IconButton>
                    <ViewIcon className={styles.postFooterIcon}/>
                </IconButton>
                <span>1.7M</span>
            </div>
            <IconButton>
                <ShareIcon className={styles.postFooterIcon}/>
            </IconButton>
        </div>
    )
}
