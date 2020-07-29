import React, { Component } from 'react'
import styles from './index.module.css'
import mainImg from '../../images/Bring-the-outdoors-in-BAh.jpg'
import delivery from '../../images/Marketing-Module.jpg'
import Article from '../article'
import Aside from '../aside'


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
                    <Aside />
                    <img className={styles.mainImg} src={mainImg}></img>
                </div>
                <p className={styles.p}>Popular Across Site</p>
                <div>
                    {this.renderArticles()}
                </div>
                <p className={styles.p}>Safety Assured</p>
                <img className={styles.delivery} src={delivery}></img>
            </div>
        )
    }
}

export default Main


