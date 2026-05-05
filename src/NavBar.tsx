import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
export function NavBar(){
    return(
    <>
        <ul className={styles.myList} >
            <li className={styles.storeName}>The Supply Shop</li>
            <li><Link to="/">Home</Link></li>
        </ul>
    </>
    )
}