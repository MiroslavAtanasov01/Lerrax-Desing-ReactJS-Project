import React, { useState, useEffect, useContext } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'


const WishlistPage = () => {
    const context = useContext(UserContext)
    const [article, setArticle] = useState([])
    const { user } = context

    const getArticle = async () => {
        const response = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const article = await response.json()

        setArticle(article.wishlist)
    }

    const renderLIst = () => {
        return article.map((e, index) => {
            return (
                <div key={e.name._id} index={index}>
                    <p>{e.name}</p>
                    <p>{e.description}</p>
                    <p>{e.price}</p>
                    <br></br>
                </div>
            )
        })
    }

    useEffect(() => {
        getArticle()
    }, [])

    if (article.length === 0) {
        return (
            <PageLayout>
                <div className={styles.empty}>Your wishlist is empty </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title="Wishlist | Lerrax Design" />
                <div className={styles.main}>
                    {renderLIst()}
                </div>
            </div>
        </PageLayout>
    )
}

export default WishlistPage