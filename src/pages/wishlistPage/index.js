import React, { useState, useEffect, useContext, useCallback } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'
import Aside from '../../components/aside'


const WishlistPage = () => {
    const context = useContext(UserContext)
    const [article, setArticle] = useState([])
    const { user } = context

    const getArticle = useCallback(async () => {
        const response = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const article = await response.json()

        setArticle(article.wishlist)
    }, [user.id])

    const remove = (id) => {
        fetch(`http://localhost:8888/api/user/removeWishlist/${user.id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id })
        })
    }

    const renderLIst = () => {
        return article.map((e, index) => {
            return (
                <div key={e._id} index={index} className={styles.div}>
                    <div className={styles.inner}>
                        <img alt="article" src={e.imageUrl}></img>
                        <div className={styles.div1}>
                            <h3>{e.name}</h3>
                            <p className={styles.price}>Price: BGN {e.price}</p>
                        </div>
                        <div className={styles.div2}>
                            <p>Added: {(e.created_at).substring(0, 10)}</p>
                            <button onClick={() => remove(e._id)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        getArticle()
    }, [article, getArticle])

    if (article.length === 0) {
        return (
            <PageLayout>
                <Aside />
                <div className={styles.empty}>Your wishlist is empty </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title="Wishlist | Lerrax Design" />
                <Aside />
                <div className={styles.main}>
                    <p className={styles.default}>Default Wish List</p>
                    {renderLIst()}
                </div>
            </div>
        </PageLayout>
    )
}

export default WishlistPage