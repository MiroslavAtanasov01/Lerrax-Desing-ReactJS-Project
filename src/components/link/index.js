import React from 'react'
import styles from './index.module.css'

const Link = ({ title, href, type }) => {
    return (
        <div className={styles[`${type}-link`]}>
            <a href={href} className={styles[`${type}-a`]}>
                {title}
            </a>
        </div>
    )
}

export default Link