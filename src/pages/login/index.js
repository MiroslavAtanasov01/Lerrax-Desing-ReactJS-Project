import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import Link from '../../components/link'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()

        const { email, password } = this.state

        if (email && password) {
            try {
                const promise = await fetch('http://localhost:8888/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'COntent-type': 'application/json' }
                })
                const authToken = promise.headers.get('Authorization')
                document.cookie = `auth-token=${authToken}`

                const response = await promise.json()

                if (response.email && authToken) {
                    this.props.history.push('/')
                } else {
                    this.props.history.push('/login')
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        const { email, password, } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.onSubmit}>
                    <h1 className={styles.h1}>Login</h1>
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                        type='login'
                    />
                    <Input
                        name='password'
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                        type='login'
                    />
                    <button className={styles.button} type='submit'>Login</button>
                    <div className={styles.div}>
                        <span>Don`t have an account?</span>
                        <Link
                            key='Sign up'
                            href="/register"
                            title='Sign up'
                            type='login'
                        />
                    </div>
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage