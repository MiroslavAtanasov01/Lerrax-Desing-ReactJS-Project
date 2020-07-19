import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../images/198fc8a2981818511dd4c313c2176ff8.jpg'
import getNavigation from '../../utils/navigation'

const Header = () => {
    const links = getNavigation()

    return (
        <header className={styles.nav}>
            <div className={styles.logo}>
                <Link
                    key='Lerrax Design'
                    href='/'
                    title='Lerrax Design'
                    type="logo"
                />
                <input className={styles.search} type="text" placeholder="Search" />
            </div>
            <div className={styles.div}>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="header"
                            />
                        )
                    })
                }

            </div>
        </header>
    )
}

export default Header