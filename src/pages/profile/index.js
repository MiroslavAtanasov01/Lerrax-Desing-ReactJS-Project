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
                    <img alt="Profile" src={picture ? picture : altImage}></img>
                    <h1 className={styles.h1}>My Account</h1>
                    <p>Name: {username}</p>
                    <p>E-mail: {email}</p>
                    <button onClick={logOut}>Logout</button>
                </div>
            </div>
        </PageLayout >
    )
}

export default ProfilePage