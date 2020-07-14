import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../images/198fc8a2981818511dd4c313c2176ff8.jpg'

const Header = () => {
    return (
        <header className={styles.nav}>
            <div className={styles.div}>
                <img className={styles.logo} src={logo}></img>
                <Link href="#" title="Products" type="header" />
                <Link href="#" title="New products" type="header" />
                <Link href="#" title="Brochure" type="header" />
                <Link href="#" title="Shops" type="header" />
                <Link href="#" title="About us" type="header" />
                <Link href="#" title="Contacts" type="header" />
                <input className={styles.search} type="text" placeholder="Search" />
            </div>
        </header>
    )
}

export default Header