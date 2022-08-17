import styles from './navbar.module.css';
import Link from 'next/link'

export default function Navbar(props) {
    return (
        <div className = {styles.navbar}>            
            <div className = {styles.logo}>
                <Link href='/'><a><h2>CP.ID</h2></a></Link>
            </div>

            <div className= {styles.loginState}>
                <Link href='login'><a>{props.name ? props.name : 'Masuk'}</a></Link>
            </div>
        </div>
    )
}