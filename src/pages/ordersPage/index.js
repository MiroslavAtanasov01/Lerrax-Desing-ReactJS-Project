import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'


const OrdersPage = () => {
    const context = useContext(UserContext)
    const [article, setArticle] = useState([])
    const { user } = context
    const history = useHistory()

    const getArticle = useCallback(async () => {
        const response = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const article = await response.json()

        setArticle(article.orders)
    }, [user.id])

    const renderLIst = () => {
        return article.map((e, index) => {
            const imageClick = () => {
                history.push(`/details/${e._id}`)
            }
            return (
                <div key={e._id} index={index} className={styles.div}>
                    <div className={styles.inner}>
                        <div className={styles.div1}>
                            <img alt="article" src={e.imageUrl} onClick={() => imageClick()}></img>
                        </div>
                        <div className={styles.div2}>
                            <h3>{e.name}</h3>
                            <p className={styles.price}>Price: BGN {e.price}</p>
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
                <div className={styles.empty}>You have no orders </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title="Orders | Lerrax Design" />
                <div className={styles.main}>
                    <p className={styles.default}>Your orders</p>
                    {renderLIst()}
                </div>
            </div>
        </PageLayout>
    )
}

export default OrdersPage