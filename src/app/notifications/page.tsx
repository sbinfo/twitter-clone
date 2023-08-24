import styles from "../page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Notifications() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div>
                Notifications
            </div>
        </main>
    );
}
