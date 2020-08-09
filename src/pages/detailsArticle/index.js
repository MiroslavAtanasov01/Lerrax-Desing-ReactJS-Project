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
    const [hasItem, setHasItem] = useState(false)
    const params = useParams()
    const history = useHistory()
    const loggedIn = context.loggedIn

    const getData = useCallback(async () => {
        const id = params.id
        const response = await fetch(`http://localhost:8888/api/article/details/${id}`)

        if (!response.ok) {
            history.push('/error')
        } else {
            const article = await response.json()
            setName(article.name)
            setDescription(article.description)
            setPrice(article.price)
            setImageUrl(article.imageUrl)
        }
    }, [params.id, history])

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
            const userId = user.id
            fetch(`http://localhost:8888/api/article/${id}`, {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ userId })
            })
        }
    }

    const changeBtn = async () => {
        const { user } = context
        const id = params.id

        const res = await fetch(`http://localhost:8888/api/user/user/${user.id}`)
        const data = await res.json()

        data.wishlist.map(e => {
            if (e._id === id) {
                setHasItem(true)
            }
        })
    }

    if (loggedIn) {
        changeBtn()
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
                {loggedIn && (<button onClick={() => onClick("wishlist")}>{!hasItem ? "Add to wishlist" : "Already added to wishlist"}</button>)}
                {loggedIn && (<button onClick={() => onClick("cart")}>{!hasItem ? "Add to Cart" : "Already added to cart"}</button>)}
                <p>name: {name}</p>
                <p>description: {description}</p>
                <p>price: {price}</p>
                <img alt="images" src={imageUrl}></img>
            </div>
        </PageLayout>
    )
}


export default DetailsPage