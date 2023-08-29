import styles from "../page.module.css";
import Navbar from "@/components/Sidebar/Sidebar";

export default function Profile() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div>
                Profile
            </div>
        </main>
    );
}
