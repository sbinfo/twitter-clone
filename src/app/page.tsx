import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { WhatIsHappeningForm } from "@/components/WhatIsHappeningForm/WhatIsHappeningForm";
import { Container, Grid } from "@mui/material";

export default function Home() {
    return (
        <main className={styles.main}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ width: '500px' }}>
                            <WhatIsHappeningForm />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>Widgets</div>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}
