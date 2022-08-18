import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'

export default function Layout ({children, username, role, token}) {
    return (
        <>
            <Navbar username={username} role={role}/>
            {/* <Navbar name='asteriskzie'/> */}
            <main>
                {children}
            </main>            
        </>
    )
}
