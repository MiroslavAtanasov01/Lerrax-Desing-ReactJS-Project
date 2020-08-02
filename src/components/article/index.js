import React from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'

const Article = ({ name, imageUrl, description, price, _id }) => {
    const history = useHistory()
    const imageClick = () => {
        history.push(`/details/${_id}`)
    }

    return (
        <div className={styles.container}>
            <img alt="article" className={styles.image} src={imageUrl} onClick={() => imageClick()}></img>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Article