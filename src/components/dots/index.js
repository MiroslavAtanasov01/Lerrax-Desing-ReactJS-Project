import React from 'react'
import styles from './index.module.css'

const Dots = ({ onClick }) => {
    return (
        <span className={styles.dot} onClick={onClick}></span>
    )
}

export default Dots