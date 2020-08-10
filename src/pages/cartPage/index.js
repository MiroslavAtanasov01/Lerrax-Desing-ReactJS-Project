import React, { useState, useEffect, useContext, useCallback } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'


const CartPage = () => {
    const context = useContext(UserContext)
    const [article, setArticle] = useState([])
    const { user } = context

    const getArticle = useCallback(async () => {
        const response = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const article = await response.json()

        setArticle(article.cart)
    }, [user.id])

    const remove = (id) => {
        fetch(`http://localhost:8888/api/user/removeCart/${user.id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id })
        })
    }

    const buy = async () => {
        article.for(e => {
            const id = e._id
            fetch(`http://localhost:8888/api/user/orders/${user.id}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ id })
            })
        })

        fetch(`http://localhost:8888/api/user/removeAll/${user.id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
        })
    }

    const total = () => {
        let total = 0
        article.map(e => total += e.price)
        return total.toFixed(2)
    }


    const renderLIst = () => {
        return article.map((e, index) => {
            return (
                <div key={e._id} index={index} className={styles.div}>
                    <img className={styles.img} alt="article" src={e.imageUrl}></img>
                    <p>{e.name}</p>
                    <p>Price: BGN {e.price}</p>
                    <button className={styles.button} onClick={() => remove(e._id)}>Remove</button>
                </div >
            )
        })
    }


    useEffect(() => {
        getArticle()
    }, [article, getArticle])

    if (article.length === 0) {
        return (
            <PageLayout>
                <div className={styles.empty}>Your Shopping cart is empty </div>
            </PageLayout>
        )
    }

    return (
        <div>
            <PageLayout>
                <div className={styles.container}>
                    <PageTitle title="Shopping cart | Lerrax Design" />
                    <div className={styles.main}>
                        <h2 className={styles.default}>Shopping cart ({article.length})</h2>
                        {renderLIst()}
                        <div className={styles.div1}>
                            <h3>Order Summary</h3>
                            <p>Total: BGN {total()}</p>
                            <button className={styles.buy} onClick={() => buy()}>BUY</button>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    )
}


export default CartPage
