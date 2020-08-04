import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import { Redirect } from 'react-router-dom'
import UserContext from '../../Context'

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            email: '',
            orders: '',
            wishList: ''
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.id)
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:8888/api/user?id=${id}`)

        if (!response.ok) {
            // this.props.history.push('/error')
            return <Redirect to='/error' />
        }

        const user = await response.json()

        this.setState({
            username: user.username,
            email: user.email
        })
    }

    logOut = () => {
        this.context.logOut()
        this.props.history.push('/')
    }

    render() {
        const { username, email, wishList, orders } = this.state

        if (!username) {
            return (
                <PageLayout>
                    <div className={styles.container}>Loading....</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div className={styles.container}>
                    <PageTitle title={`${username} | Lerrax Design`} />
                    <h1 className={styles.h1}>My Account</h1>
                    <div className={styles.div}>
                        <p>Name: {username}</p>
                        <p>E-mail: {email}</p>
                        <button onClick={this.logOut}>Logout</button>
                    </div>
                    <div className={styles.div2}>
                        <ul className={styles.ul}>
                            <li>Orders</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>
            </PageLayout >
        )
    }
}

export default ProfilePage 