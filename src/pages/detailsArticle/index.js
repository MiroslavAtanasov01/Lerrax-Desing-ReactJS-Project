import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import UserContext from '../../Context'


const DetailsPage = () => {
    const context = useContext(UserContext)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const params = useParams()
    const history = useHistory()

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
    }


    if (!name) {
        return (
            <PageLayout>
                <div>Loading....</div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title={`${name} | Lerrax Design`} />
                <button onClick={() => onClick("wishlist")}>Add to wishlist</button>
                <button onClick={() => onClick("cart")}>Add to Cart</button>
                <p>name: {name}</p>
                <p>description: {description}</p>
                <p>price: {price}</p>
                <img alt="images" src={imageUrl}></img>
            </div>
        </PageLayout>
    )
}


export default DetailsPage