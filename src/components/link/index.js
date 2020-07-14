import React from 'react'
import styles from './index.module.css'

const Link = ({ title, href, type }) => {
    return (
        <div className={styles["header-link"]}>
            <a href={href} className={styles["header-a"]}>
                {title}
            </a>
        </div>
    )
}

export default Link