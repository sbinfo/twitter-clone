import styles from "../page.module.css";
import Navbar from "@/components/Sidebar/Sidebar";

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
