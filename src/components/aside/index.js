import React from 'react'
import styles from './index.module.css'
import Link from '../link'

const Aside = () => {
    return (
        <aside className={styles.container}>
            <h1 className={styles.h1}>Featured Categories</h1>
            <Link href="/sofas" type="aside" title="Sofas" key="Sofas" > </Link>
            <Link href="/chairs" type="aside" title="Chairs" key="Chairs" > </Link>
            <Link href="#" type="aside" title="Tables" key="Tables" > </Link>
            <Link href="#" type="aside" title="Beds" key="Beds" > </Link>
            <Link href="#" type="aside" title="Sofas" key="Sofas" > </Link>
            <Link href="#" type="aside" title="Chairs" key="Chairs" > </Link>
            <Link href="#" type="aside" title="Tables" key="Tables" > </Link>
            <Link href="#" type="aside" title="Beds" key="Beds" > </Link>
            <Link href="#" type="aside" title="Sectionals" key="Sectionals" > </Link>
            <Link href="#" type="aside" title="Leather Seating" key="Leather Seating" > </Link>
        </aside>
    )
}

export default Aside