import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import WidgetsBar from "@/components/WidgetsBar/WidgetsBar";
import { Grid } from "@mui/material";
import Feed from "./feed/Feed";

export default function Home() {
    return (
        <main className={styles.main}>
             <Grid container className={styles.mainGrid}>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={6}>
                        <Feed />
                    </Grid>
                    <Grid item xs={3}>
                        <WidgetsBar />
                    </Grid>
                </Grid>
        </main>
    );
}
