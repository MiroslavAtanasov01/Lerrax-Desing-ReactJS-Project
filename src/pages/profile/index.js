import React, { useContext, useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'
import { useParams, useHistory } from 'react-router-dom'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import Aside from '../../components/aside'
import UserContext from '../../Context'
import LoadingSpinner from '../../components/loading'
import altImage from "../../images/profile-picture-vector-600w-404138257.webp"

const ProfilePage = () => {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [orders, setOrders] = useState([])
    const [picture, setPicture] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    const getData = useCallback(async () => {
        const id = params.id
        const response = await fetch(`http://localhost:8888/api/user?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        } else {
            const user = await response.json()
            setUsername(user.username)
            setEmail(user.email)
            setOrders(user.orders.length)
            setPicture(user.picture)
        }
    }, [params.id, history])

    useEffect(() => {
        getData()
    }, [getData])

    if (!username) {
        return (
            <PageLayout>
                <LoadingSpinner />
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title={`${username} | Lerrax Design`} />
                <Aside />
                <div className={styles.div}>
                    <h1 className={styles.h1}>My Account</h1>
                    <div className={styles.main}>
                        <div className={styles.div1}>
                            <img className={styles.profile} alt="Profile" src={picture ? picture : altImage}></img>
                        </div>
                        <div className={styles.div2}>
                            <p>Name: {username}</p>
                            <p>E-mail: {email}</p>
                        </div>
                        <div className={styles.div3}>
                            <button>Orders:{orders}</button>
                            <button onClick={logOut}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout >
    )
}

export default ProfilePage