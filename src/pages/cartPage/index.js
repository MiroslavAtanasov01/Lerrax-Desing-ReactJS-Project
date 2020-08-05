import React, { useState, useEffect, useContext } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'


const CartPage = () => {
    const context = useContext(UserContext)
    const [article, setArticle] = useState([])
    const { user } = context

    const getArticle = async () => {
        const response = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const article = await response.json()

        setArticle(article.cart)
    }

    const renderLIst = () => {
        return article.map((e, index) => {
            return (
                <div key={e._id} index={index}>
                    <p>{e.name}</p>
                    <p>{e.description}</p>
                    <p>{e.price}</p>
                    <button>Remove</button>
                    <br></br>
                    <br></br>
                </div>
            )
        })
    }

    const total = () => {
        let total = 0
        article.map(e => total += e.price)
        return total
    }

    useEffect(() => {
        getArticle()
    }, [])

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
                        {renderLIst()}
                    </div>
                    <div>
                        <h3>Order Summary</h3>
                        <p>Total: US ${total()}</p>
                        <button onClick>Buy</button>
                    </div>
                </div>
            </PageLayout>
        </div>
    )
}


export default CartPage
