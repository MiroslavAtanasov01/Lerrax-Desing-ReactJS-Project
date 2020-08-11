import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import sectionImage from '../../images/03232020-gnp-rugs-694x447_editorial2.jpg'
import sectionImage2 from '../../images/03232020-gnp-rugs-694x447_editorial1.jpg'
import Article from '../article'
import MainImg from '../mainImg'

const Main = () => {
    const [articles, setArticles] = useState([])
    const history = useHistory()

    const getArticles = async () => {
        const promise = await fetch('http://localhost:8888/api/article')
        const articles = await promise.json()

        setArticles(articles)
    }

    const onClick = (type) => {
        history.push(`/${type}`)
    }

    const renderArticles = () => {
        return articles.map(article => {
            return (
                <Article key={article._id} {...article} />
            )
        })
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div className={styles.container}>
            <MainImg />
            <p className={styles.p}>Popular Across Site</p>
            <div>
                {renderArticles()}
            </div>
            <section className={styles.section}>
                <div className={styles.sectionImage}>
                    <img alt='sectionImage2' className={styles.image} src={sectionImage2}></img>
                </div>
                <div className={styles.section2}>
                    <h1>Find Your Perfect Table Size</h1>
                    <p> Before you start shopping, you need to know two things: how to choose the right table
                    size and how to place it in your room. The perfect table can breathe life into a space
                             and unify your furnishings, so it’s important to get it right.</p>
                    <button className={styles.button} onClick={() => onClick('tables')}>Read More</button>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.section3}>
                    <h1>Tips on Buying the Best Outdoor Bench</h1>
                    <p> To ensure you score the perfect combination of durability and style, follow our tips on buying outdoor benches.
                            You're sure to find a sturdy all-weather bench that blends seamlessly with your patio's decor.</p>
                    <button className={styles.button} onClick={() => onClick('benches')}>Read More</button>
                </div>
                <div className={styles.sectionImage}>
                    <img alt='sectionImage' className={styles.image} src={sectionImage}></img>
                </div>
            </section>
        </div>
    )
}

export default Main


