import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import Link from '../../components/link'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            username: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()

        const { email, username, password, rePassword } = this.state

        if (email && username && password && rePassword && password === rePassword) {
            try {
                const promise = await fetch('http://localhost:8888/api/user/register', {
                    method: 'POST',
                    body: JSON.stringify({ email, username, password, rePassword }),
                    headers: { 'COntent-type': 'application/json' }
                })
                const authToken = promise.headers.get('Authorization')
                document.cookie = `auth-token=${authToken}`

                const response = await promise.json()

                if (response.email && authToken) {
                    this.props.history.push('/')
                } else {
                    this.props.history.push('/register')
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            this.props.history.push('/register')
        }
    }


    render() {
        const { email, username, password, rePassword } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.onSubmit}>
                    <h1 className={styles.h1}>Register</h1>
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                        type='login'
                    />
                    <Input
                        value={username}
                        onChange={(e) => this.onChange(e, 'username')}
                        label="Username"
                        id="username"
                        type='login'
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                        type='login'
                        name='password'
                    />
                    <Input
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-password"
                        id="re-password"
                        type='login'
                        name='password'
                    />
                    <button className={styles.button} type='submit'>Register</button>
                    <div className={styles.div}>
                        <span>Already have an account?</span>
                        <Link
                            key='Sign in'
                            href="/login"
                            title='Sign in'
                            type='register'
                        />
                    </div>
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage