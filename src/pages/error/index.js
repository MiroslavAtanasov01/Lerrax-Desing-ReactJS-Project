import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Link from '../../components/link'


const ErrorPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <div className={styles.notFound}>
                    <div className={styles['notFound-404']}>
                        <h1 className={styles.h1}>Oops!</h1>
                    </div>
                    <h2 className={styles.h2}>404 - Page not found</h2>
                    <p className={styles.p}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link
                        key='Go To Homepage'
                        href="/"
                        title='Go To Homepage'
                        type='error'
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export default ErrorPage