import styles from "../page.module.css";
import Navbar from "@/components/Navbar/Navbar";

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
