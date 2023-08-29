import styles from "../page.module.css";
import Navbar from "@/components/Sidebar/Sidebar";

export default function Messages() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div>
                Messages
            </div>
        </main>
    );
}
