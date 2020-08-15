import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'
import LoadingSpinner from '../../components/loading'


const DetailsPage = () => {
    const context = useContext(UserContext)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [hasCart, setHasCart] = useState(false)
    const [hasWishlist, setHasWishlist] = useState(false)
    const params = useParams()
    const history = useHistory()
    const loggedIn = context.loggedIn

    const getData = useCallback(async () => {
        const id = params.id
        const { user } = context
        const response = await fetch(`http://localhost:8888/api/article/details/${id}`)

        if (!response.ok) {
            history.push('/error')
        } else {
            const article = await response.json()
            setName(article.name)
            setDescription(article.description)
            setPrice(article.price)
            setImageUrl(article.imageUrl)

            const res = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
            const data = await res.json()

            data.wishlist.forEach(e => {
                if (e._id === id) {
                    setHasWishlist(true)
                }
            })

            data.cart.forEach(e => {
                if (e._id === id) {
                    setHasCart(true)
                }
            })

        }
    }, [params.id, history, context])

    useEffect(() => {
        getData()
    }, [getData])

    const onClick = (type) => {
        const { user } = context
        const id = params.id

        fetch(`http://localhost:8888/api/user/${type}/${user.id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id })
        })

        if (type === 'wishlist') {
            setHasWishlist(true)
        } else {
            setHasCart(true)
        }

        // ADD TO LIKES
        // if (type === 'wishlist') {
        //     const userId = user.id
        //     fetch(`http://localhost:8888/api/article/${id}`, {
        //         method: "PUT",
        //         headers: { 'Content-type': 'application/json' },
        //         body: JSON.stringify({ userId })
        //     })
        // }
    }

    if (!name) {
        return (
            <PageLayout>
                <LoadingSpinner />
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title={`${name} | Lerrax Design`} />
                <div className={styles.div}>
                    <p>{name}</p>
                    <span>BGN {price}</span>
                </div>
                <p className={styles.p}><strong>International Customers:</strong> </p>
                <p>To order this item, please call (00+1) 630-369-4464, or fax (00+1) 630-527-1448. </p>
                <div className={styles.buttons}>
                    {loggedIn && (<button onClick={() => onClick("wishlist")}>{!hasWishlist ? "ADD TO WISHLIST" : "ALREADY ADDED TO WISHLIST"}</button>)}
                    {loggedIn && (<button onClick={() => onClick("cart")}>{!hasCart ? "ADD TO CART" : "AlREADY ADDED TO CART"}</button>)}
                </div>
                <img className={styles.image} alt="images" src={imageUrl}></img>
                <p>{description}</p>
            </div>
        </PageLayout>
    )
}


export default DetailsPage