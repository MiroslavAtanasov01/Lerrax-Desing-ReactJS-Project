import React, { Component } from 'react'
import styles from './index.module.css'
import mainImg from '../../images/Feb-20-marquees1 placeholdr.jpg'
import sectionImage from '../../images/03232020-gnp-rugs-694x447_editorial2.jpg'
import sectionImage2 from '../../images/03232020-gnp-rugs-694x447_editorial1.jpg'
import delivery from '../../images/Marketing-Module.jpg'
import Article from '../article'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    getArticles = async () => {
        const promise = await fetch('http://localhost:8888/api/article')
        const articles = await promise.json()

        this.setState({
            articles
        })
    }

    renderArticles() {
        const { articles } = this.state

        return articles.map(article => {
            return (
                <Article key={article._id} {...article} />
            )
        })
    }

    componentDidMount() {
        this.getArticles()
    }

    render() {

        return (
            <div className={styles.container}>
                <div className={styles['inner-container']}>
                    <img alt='mainImage' className={styles.mainImg} src={mainImg}></img>
                </div>
                <p className={styles.p}>Popular Across Site</p>
                <div>
                    {this.renderArticles()}
                </div>
                <section className={styles.section}>
                    <div className={styles.section1}>
                        <img alt='sectionImage2' className={styles.sectionImage} src={sectionImage2}></img>
                    </div>
                    <div className={styles.section2}>
                        <h1>Find Your Perfect Rug Size</h1>
                        <p> Before you start shopping, you need to know two things: how to choose the right rug
                        size and how to place it in your room. The perfect rug can breathe life into a space
                             and unify your furnishings, so it’s important to get it right.</p>
                        <button className={styles.button}>Read More</button>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.section3}>
                        <h1>Tips on Buying the Best Outdoor Rug</h1>
                        <p> To ensure you score the perfect combination of durability and style, follow our tips on buying outdoor rugs.
                            You're sure to find a sturdy all-weather rug that blends seamlessly with your patio's decor.</p>
                        <button className={styles.button}>Read More</button>
                    </div>
                    <div className={styles.section1}>
                        <img alt='sectionImage' className={styles.sectionImage} src={sectionImage}></img>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main


