import Search from '../Search/Search'
import style from './widgetsBar.module.scss'

export default function WidgetsBar () {
    return (
        <div className={style.widgetsBar}>
            <Search />
        </div>
    )
}