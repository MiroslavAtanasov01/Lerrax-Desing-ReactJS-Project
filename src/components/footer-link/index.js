import React from 'react'
import styles from './index.module.css'

const FooterLink = ({ title, first, second, third }) => {
    return (
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{first}</p>
            <p>{second}</p>
            <p>{third}</p>
        </div>
    )
}

export default FooterLink