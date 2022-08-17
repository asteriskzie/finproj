import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout ({children}) {
    return (
        <>
            <Navbar/>
            {/* <Navbar name='asteriskzie'/> */}
            <div>
                {children}
            </div>            
        </>
    )
}
