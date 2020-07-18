import React from 'react';
import styles from './index.module.css'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'

const PageLayout = () => {
    return (
        <div className={styles.app}>
            <Header />
            <div>
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout
