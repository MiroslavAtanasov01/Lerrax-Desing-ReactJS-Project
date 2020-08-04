import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'


const DetailsPage = () => {
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
                <p>name: {name}</p>
                <p>description: {description}</p>
                <p>price: {price}</p>
                <img alt="images" src={imageUrl}></img>
            </div>
        </PageLayout>
    )
}


export default DetailsPage