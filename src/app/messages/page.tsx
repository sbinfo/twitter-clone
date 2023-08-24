import styles from "../page.module.css";
import Navbar from "@/components/Navbar/Navbar";

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
