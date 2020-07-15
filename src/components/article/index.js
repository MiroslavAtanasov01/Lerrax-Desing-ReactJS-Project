import React from 'react'
import styles from './index.module.css'

const Article = ({ name, imageUrl }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={imageUrl}></img>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Article