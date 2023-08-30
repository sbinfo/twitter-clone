import { WhatIsHappeningForm } from "@/components/WhatIsHappeningForm/WhatIsHappeningForm"
import Post from "@/components/Post/Post"
import styles from './feed.module.scss'

function Feed () {
    return (
        <div className={styles.feed}>
            <h2 className={styles.title}>Home</h2>
            <WhatIsHappeningForm />

            <div>
                <Post
                    displayName="NASA"
                    userName="@NASA"
                    verified={true}
                    avatar=""
                    text="Hurry! There are only two days left to apply to be one of our 
                    @NASAinterns
                     this spring. Sign up to be part of the next generation of explorers, designers, coders, and communicators. Applications are due Aug. 31: http://intern.nasa.gov"
                    postTime="Aug 29"
                    file="https://pbs.twimg.com/media/F4u0b2kWQAAbMYI?format=webp&name=small"
                />
                
                <Post
                    displayName="Eva McMillan"
                    userName="@EvasTeslaSPlaid"
                    verified={true}
                    avatar=""
                    text="Everyone please say thank you to 
                    @elonmusk
                     for all of his hard work and all the good things he does for humanity and a better life for all of us"
                    postTime="Aug 25"
                    file="https://pbs.twimg.com/media/F4uH7fFWYAEWLhQ?format=webp&name=small"
                />
            </div>
        </div>
    )
}

export default Feed