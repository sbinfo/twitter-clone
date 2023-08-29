import styles from './feed.module.scss'
import { WhatIsHappeningForm } from "@/components/WhatIsHappeningForm/WhatIsHappeningForm"


function Feed () {
    return (
        <div className={styles.feed}>
            <h2 className={styles.title}>Home</h2>
            <WhatIsHappeningForm />
        </div>
    )
}

export default Feed