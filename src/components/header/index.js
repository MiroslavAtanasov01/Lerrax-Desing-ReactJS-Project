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
                    <div>
                        <Link href="/about" type="tools" title="About us" key="about" > </Link>
                        <Link href="/contacts" type="tools" title="Contact us" key="contacts" > </Link>
                    </div>
                    <Link key='Lerrax Design' href='/' title='Lerrax Design' type="logo" />
                    <div>
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
                    </div>
                </div>
                <div className={styles.div}>
                    <Link href="/sofas" type="header" title="Sofas" key="Sofas" > </Link>
                    <Link href="/chairs" type="header" title="Chairs" key="Chairs" > </Link>
                    <Link href="/beds" type="header" title="Beds" key="Beds" > </Link>
                    <Link href="/tables" type="header" title="Tables" key="Tables" > </Link>
                    <Link href="/sectionals" type="header" title="Sectionals" key="Sectionals" > </Link>
                    <Link href="/benches" type="header" title="Benches" key="Benches" > </Link>
                    <Link href="/nightstands" type="header" title="Nightstands" key="Nightstands" > </Link>
                    <Link href="/wardrobes" type="header" title="Wardrobes" key="Wardrobes" > </Link>
                    <Link href="/bookcases" type="header" title="Bookcases" key="Bookcases" > </Link>
                    <Link href="/desks" type="header" title="Desks" key="Desks" > </Link>
                </div>
            </header>
        )
    }
}

export default Header