import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout ({children, name}) {
    return (
        <>
            <Navbar name={name}/>
            {/* <Navbar name='asteriskzie'/> */}
            <main>
                {children}
            </main>            
        </>
    )
}
