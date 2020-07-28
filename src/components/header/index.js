import React, { Component } from 'react'
import styles from './index.module.css'
import Link from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Header extends Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <header className={styles.nav} >
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
}

export default Header