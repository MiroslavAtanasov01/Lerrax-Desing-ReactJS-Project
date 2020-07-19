import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, value, onChange, placeholder }) => {

    return (
        <div className={styles.container}>
            <div className={styles['inner-container']}>
                <label className={styles.label} htmlFor={id}>{label}</label>
            </div>
            <input className={styles.input} id={id} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )

}

export default Input