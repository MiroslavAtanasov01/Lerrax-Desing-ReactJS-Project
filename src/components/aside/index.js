import React from 'react'
import styles from './index.module.css'
import Link from '../link'

const Aside = () => {
    return (
        <aside className={styles.container}>
            <h1 className={styles.h1}>Featured Categories</h1>
            <Link href="/sofas" type="aside" title="Sofas" key="Sofas" > </Link>
            <Link href="/chairs" type="aside" title="Chairs" key="Chairs" > </Link>
            <Link href="/beds" type="aside" title="Beds" key="Beds" > </Link>
            <Link href="/tables" type="aside" title="Tables" key="Tables" > </Link>
            <Link href="/sectionals" type="aside" title="Sectionals" key="Sectionals" > </Link>
            <Link href="/benches" type="aside" title="Benches" key="Benches" > </Link>
            <Link href="/nightstands" type="aside" title="Nightstands" key="Nightstands" > </Link>
            <Link href="/wardrobes" type="aside" title="Wardrobes" key="Wardrobes" > </Link>
            <Link href="/bookcases" type="aside" title="Bookcases" key="Bookcases" > </Link>
            <Link href="/desks" type="aside" title="Desks" key="Desks" > </Link>
        </aside>
    )
}

export default Aside