'use client'

import { WhatIsHappeningForm } from "@/components/WhatIsHappeningForm/WhatIsHappeningForm"
import Post from "@/components/Post/Post"
import styles from './feed.module.scss'
import { useAppSelector } from "@/store/hooks/hooks"

function Feed () {
    const {posts} = useAppSelector(state => state.postSlice)

    return (
        <div className={styles.feed}>
            <h2 className={styles.title}>Home</h2>
            <WhatIsHappeningForm />

            <div>
                { posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        displayName={post.displayName}
                        userName={post.userName}
                        avatar={post.avatar}
                        postTime={post.postTime}
                        verified={post.verified}
                        fileUrl={post.fileUrl}
                        text={post.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed
