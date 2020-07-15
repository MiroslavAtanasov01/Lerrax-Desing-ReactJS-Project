import React from 'react'
import styles from './index.module.css'
import Link from '../link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" title="Shops" type="footer" />
                <Link href="#" title="Contacts" type="footer" />
                <Link href="#" title="Follow us" type="footer" />
            </div>
            <p className={styles.p}>Lerrax Design &copy; 2020</p>
        </footer>
    )
}


export default Footer