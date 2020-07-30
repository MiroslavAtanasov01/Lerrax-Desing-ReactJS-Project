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
                <div className={styles.container}>
                    <div className={styles.div2}></div>
                    <Link
                        key='Lerrax Design'
                        href='/'
                        title='Lerrax Design'
                        type="logo"
                    />
                    <div className={styles.div}>
                        {
                            links.map(navElement => {
                                return (
                                    <Link
                                        key={navElement.title}
                                        href={navElement.link}
                                        title={navElement.title}
                                        type="tools"
                                    />
                                )
                            })
                        }
                        {/* <input className={styles.search} type="text" placeholder="Search" /> */}

                    </div>
                </div>
                <div className={styles.div1}>
                    <Link href="#" type="header" title="Sofas" key="Sofas" > </Link>
                    <Link href="#" type="header" title="Chairs" key="Chairs" > </Link>
                    <Link href="#" type="header" title="Tables" key="Tables" > </Link>
                    <Link href="#" type="header" title="Tables" key="Tables" > </Link>
                    <Link href="#" type="header" title="Tables" key="Tables" > </Link>
                    <Link href="#" type="header" title="Beddawdawdaws" key="Beds" > </Link>
                    <Link href="#" type="header" title="Beddadws" key="Beds" > </Link>
                    <Link href="#" type="header" title="Beds" key="Beds" > </Link>
                    <Link href="#" type="header" title="Sectionals" key="Sectionals" > </Link>
                    <Link href="#" type="header" title="Leather Seating" key="Leather Seating" > </Link>
                </div>
            </header>
        )
    }
}

export default Header