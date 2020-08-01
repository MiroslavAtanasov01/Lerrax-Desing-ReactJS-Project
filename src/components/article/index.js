import React from 'react'
import styles from './index.module.css'

const Article = ({ name, imageUrl }) => {
    const imageClick = (props) => {
        console.log(props);
    }

    return (
        <div className={styles.container}>
            <img alt="article" className={styles.image} src={imageUrl} onClick={() => imageClick()}></img>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Article