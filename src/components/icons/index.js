import React from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icons = ({ href, icon }) => {
    return (
        <a href={href} className={styles.social + ' ' + styles.twitter}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default Icons