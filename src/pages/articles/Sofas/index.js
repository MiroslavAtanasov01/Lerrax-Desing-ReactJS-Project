import React, { useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'
import Article from '../../../components/article'
import Aside from '../../../components/aside'
import PageLayout from '../../../components/page-layout'
import PageTitle from '../../../components/helmet'


const Sofas = () => {
    const [sofas, setSofas] = useState([])

    const getSofas = useCallback(async () => {
        const promise = await fetch('http://localhost:8888/api/article/sofas')
        const sofas = await promise.json()

        setSofas(sofas)
    }, [])

    const renderSofas = () => {
        return sofas.map((sofa, index) => {
            return (
                <Article key={sofa._id} index={index} {...sofa} />
            )
        })
    }

    useEffect(() => {
        getSofas()
    }, [getSofas])

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title="Sofas | Lerrax Design" />
                <Aside />
                <div className={styles.main}>
                    {renderSofas()}
                </div>
            </div>
        </PageLayout>
    )
}

export default Sofas