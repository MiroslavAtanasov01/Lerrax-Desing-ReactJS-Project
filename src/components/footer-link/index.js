import React from 'react'
import styles from './index.module.css'

const FooterLink = ({ title, name, name2, name3 }) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.h3}>{title}</h3>
            <p className={styles.p}>{name}</p>
            <p className={styles.p}>{name2}</p>
            <p className={styles.p}>{name3}</p>
        </div>
    )
}

export default FooterLink