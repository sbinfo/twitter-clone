import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './search.module.css'

export default function Search() {
    return (
        <div className={styles.search}>
            <TextField
                id="outlined-start-adornment"
                placeholder="Search"
                size="small"
                InputProps={{
                    style: { borderRadius: '50px' },
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>,
                }}
            />
        </div>
    )
}