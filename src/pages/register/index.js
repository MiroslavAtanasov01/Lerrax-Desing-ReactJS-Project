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


    render() {
        const { email, username, password, rePassword } = this.state

        return (
            <PageLayout>
                <div className={styles.container}>
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
                    />
                    <Input
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-password"
                        id="re-password"
                        type='login'
                    />
                    <button className={styles.button}>Register</button>
                    <div className={styles.div}>
                        <span>Already have an account?</span>
                        <Link
                            key='Sign in'
                            href="/login"
                            title='Sign in'
                            type='register'
                        />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage